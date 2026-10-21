import * as THREE from 'three';
import type { LayoutResult } from './layout';

/** 极简轨道控制：左键旋转 / 滚轮缩放 / 右键或中键平移，支持单指旋转与双指缩放 */
export class OrbitCam {
  camera: THREE.PerspectiveCamera;
  target = new THREE.Vector3(0, 0, 0);
  distance = 120;
  theta = Math.PI * 0.25;   // 水平角
  phi = Math.PI * 0.32;     // 极角（0 = 正上方）
  minDistance = 12;
  maxDistance = 420;
  enabled = true;
  onChange?: () => void;

  private canvas: HTMLCanvasElement;
  private dragging: 'rotate' | 'pan' | null = null;
  private last = { x: 0, y: 0 };
  private pointers = new Map<number, { x: number; y: number }>();
  private pinchDist = 0;
  private damping = { theta: 0, phi: 0 };

  clearInertia() { this.damping.theta = 0; this.damping.phi = 0; }

  constructor(camera: THREE.PerspectiveCamera, canvas: HTMLCanvasElement) {
    this.camera = camera;
    this.canvas = canvas;
    this.bind();
    this.update();
  }

  private bind() {
    const el = this.canvas;
    el.addEventListener('contextmenu', (e) => e.preventDefault());

    el.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return;
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      el.setPointerCapture(e.pointerId);
      if (this.pointers.size === 1) {
        this.dragging = e.button === 2 || e.button === 1 ? 'pan' : 'rotate';
        this.last = { x: e.clientX, y: e.clientY };
      } else if (this.pointers.size === 2) {
        this.dragging = null;
        this.pinchDist = this.pointerGap();
      }
    });

    el.addEventListener('pointermove', (e) => {
      if (!this.pointers.has(e.pointerId)) return;
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (this.pointers.size === 2) {
        const gap = this.pointerGap();
        if (this.pinchDist > 0) this.zoom((this.pinchDist - gap) * 0.02);
        this.pinchDist = gap;
        return;
      }
      if (!this.dragging) return;
      const dx = e.clientX - this.last.x;
      const dy = e.clientY - this.last.y;
      this.last = { x: e.clientX, y: e.clientY };

      if (this.dragging === 'rotate') {
        this.damping.theta -= dx * 0.005;
        this.damping.phi -= dy * 0.004;
      } else {
        this.pan(dx, dy);
      }
    });

    const end = (e: PointerEvent) => {
      this.pointers.delete(e.pointerId);
      if (this.pointers.size === 0) this.dragging = null;
      if (this.pointers.size < 2) this.pinchDist = 0;
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);

    el.addEventListener(
      'wheel',
      (e) => {
        if (!this.enabled) return;
        e.preventDefault();
        this.zoom(e.deltaY * 0.06);
      },
      { passive: false }
    );
  }

  private pointerGap() {
    const p = [...this.pointers.values()];
    return Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
  }

  zoom(delta: number) {
    this.distance = THREE.MathUtils.clamp(this.distance * (1 + delta * 0.01), this.minDistance, this.maxDistance);
  }

  pan(dx: number, dy: number) {
    const scale = this.distance * 0.0016;
    const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrix, 0);
    const up = new THREE.Vector3(0, 1, 0);
    this.target.addScaledVector(right, -dx * scale);
    this.target.addScaledVector(up, dy * scale);
  }

  /** 相机看向哪一层（漫游时使用） */
  focusRing(res: LayoutResult, fraction: number) {
    // fraction 0..1 沿塔高
    const y = fraction * res.topY;
    this.target.set(0, y, 0);
  }

  update() {
    // 惯性衰减
    this.theta += this.damping.theta;
    this.phi += this.damping.phi;
    this.damping.theta *= 0.82;
    this.damping.phi *= 0.82;

    this.phi = THREE.MathUtils.clamp(this.phi, 0.06, Math.PI - 0.06);
    this.target.y = THREE.MathUtils.clamp(this.target.y, -20, 400);

    const sp = Math.sin(this.phi);
    this.camera.position.set(
      this.target.x + this.distance * sp * Math.cos(this.theta),
      this.target.y + this.distance * Math.cos(this.phi),
      this.target.z + this.distance * sp * Math.sin(this.theta)
    );
    this.camera.lookAt(this.target);
    this.onChange?.();
  }

  dispose() {
    this.enabled = false;
  }
}

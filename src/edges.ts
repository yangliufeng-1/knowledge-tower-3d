import * as THREE from 'three';
import type { LayoutResult } from './layout';

export interface EdgeView {
  lines: THREE.LineSegments;
  positions: Float32Array;
  ranges: { edgeIdx: number; offset: number }[];
  /** 已完整绘制过的边（避免重复计算） */
  drawn?: Set<number>;
}

/**
 * 前置依赖连线：每个边一段三次贝塞尔采样，存为 LineSegments。
 * 「生长式」动画通过缩短每段的可见比例实现。
 */
export function buildEdges(res: LayoutResult, catColor: Map<string, string>): EdgeView {
  const SEG = 10;
  const perEdgeVerts = SEG * 2 * 3;
  const total = res.edges.length * perEdgeVerts;
  const positions = new Float32Array(total);
  const colors = new Float32Array(total);

  res.edges.forEach((e, i) => {
    const c = catColor.get(e.to.categoryId) ?? '#888888';
    const col = new THREE.Color(c);
    const base = i * perEdgeVerts;
    for (let s = 0; s < SEG; s++) {
      for (let k = 0; k < 2; k++) {
        const vi = base + (s * 2 + k) * 3;
        colors[vi] = col.r * 0.55;
        colors[vi + 1] = col.g * 0.55;
        colors[vi + 2] = col.b * 0.55;
      }
    }
  });

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const lines = new THREE.LineSegments(geo, mat);
  lines.frustumCulled = false;

  const ranges = res.edges.map((_, i) => ({ edgeIdx: i, offset: i * perEdgeVerts }));

  return { lines, positions, ranges };
}

const _v = new THREE.Vector3();
const TMP = { a: new THREE.Vector3(), b: new THREE.Vector3(), c: new THREE.Vector3(), d: new THREE.Vector3() };

/**
 * 重新计算某条边的顶点。progress ∈ [0,1] 表示「爬行」到目标的进度。
 */
export function writeEdge(
  ev: EdgeView,
  res: LayoutResult,
  i: number,
  progress: number,
  SEG = 10
) {
  const e = res.edges[i];
  const perEdgeVerts = SEG * 2 * 3;
  const base = i * perEdgeVerts;
  const p = Math.max(0, Math.min(1, progress));
  if (p <= 0) {
    ev.positions.fill(0, base, base + perEdgeVerts);
    return;
  }

  TMP.a.copy(e.from.pos);
  TMP.d.copy(e.to.pos);
  // 控制点：从底部节点向上，向顶部节点向下，弧线外扩
  const mid = TMP.a.clone().add(TMP.d).multiplyScalar(0.5);
  const bulge = TMP.a.distanceTo(TMP.d) * 0.12;
  TMP.b.copy(TMP.a).add(new THREE.Vector3(0, (TMP.d.y - TMP.a.y) * 0.45, 0));
  TMP.c.copy(TMP.d).add(new THREE.Vector3(0, -(TMP.d.y - TMP.a.y) * 0.45, 0));
  const dir = mid.clone().sub(new THREE.Vector3(0, mid.y, 0)).normalize().multiplyScalar(bulge);
  TMP.b.add(dir);
  TMP.c.add(dir);

  let prev = new THREE.Vector3();
  for (let s = 0; s <= SEG; s++) {
    const t = s / SEG;
    _v.copy(curvePoint(TMP.a, TMP.b, TMP.c, TMP.d, t));
    if (s > 0) {
      const idx = base + (s - 1) * 6;
      if ((s - 1) / SEG <= p) {
        ev.positions[idx] = prev.x;
        ev.positions[idx + 1] = prev.y;
        ev.positions[idx + 2] = prev.z;
        ev.positions[idx + 3] = _v.x;
        ev.positions[idx + 4] = _v.y;
        ev.positions[idx + 5] = _v.z;
      } else {
        ev.positions[idx] = ev.positions[idx + 1] = ev.positions[idx + 2] = 0;
        ev.positions[idx + 3] = ev.positions[idx + 4] = ev.positions[idx + 5] = 0;
      }
    }
    prev.copy(_v);
  }
}

function curvePoint(
  a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, d: THREE.Vector3, t: number
): THREE.Vector3 {
  const it = 1 - t;
  return new THREE.Vector3(
    it * it * it * a.x + 3 * it * it * t * b.x + 3 * it * t * t * c.x + t * t * t * d.x,
    it * it * it * a.y + 3 * it * it * t * b.y + 3 * it * t * t * c.y + t * t * t * d.y,
    it * it * it * a.z + 3 * it * it * t * b.z + 3 * it * t * t * c.z + t * t * t * d.z
  );
}

/** 每个时代的半透明标记环 */
export function buildRings(res: LayoutResult, catColor: Map<string, string>): THREE.Group {
  const g = new THREE.Group();
  for (const ring of res.rings) {
    // 圆环
    const geo = new THREE.RingGeometry(ring.radius * 0.985, ring.radius * 1.015, 128, 1);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0.09,
      side: THREE.DoubleSide, depthWrite: false,
    });
    const m = new THREE.Mesh(geo, mat);
    m.rotation.x = -Math.PI / 2;
    m.position.y = ring.y;
    m.userData.ringIndex = res.rings.indexOf(ring);
    g.add(m);

    // 扇区分隔线（细弧）
    for (const sec of ring.sectors) {
      const arcGeo = new THREE.BufferGeometry();
      const pts: number[] = [];
      const steps = 24;
      for (let i = 0; i <= steps; i++) {
        const a = sec.angleStart + ((sec.angleEnd - sec.angleStart) * i) / steps;
        pts.push(Math.cos(a) * ring.radius, 0, Math.sin(a) * ring.radius);
      }
      arcGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      const arcMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(catColor.get(sec.cat.id) ?? '#ffffff'),
        transparent: true, opacity: 0.22, depthWrite: false,
      });
      const arc = new THREE.Line(arcGeo, arcMat);
      arc.position.y = ring.y + 0.02;
      arc.userData.ringIndex = res.rings.indexOf(ring);
      g.add(arc);
    }
  }
  return g;
}

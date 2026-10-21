import * as THREE from 'three';
import type { LayoutResult } from './layout';

export interface LabelItem {
  el: HTMLDivElement;
  pos: THREE.Vector3;
  nodeId?: string;
  kind: 'node' | 'era' | 'sector';
  /** 所属层 index（era / sector 标签用） */
  ringIndex?: number;
  /** 名称优先级（重要度越高越优先显示） */
  priority: number;
  baseOpacity: number;
}

/**
 * 标签层：绝对定位 HTML（不用 3D 内嵌文字，保证任何缩放下都清晰）。
 * 图例滑块按「到相机的距离」排序，只显示最近 N 个。
 */
export class LabelLayer {
  root: HTMLElement;
  items: LabelItem[] = [];
  private camera: THREE.PerspectiveCamera;
  private w = 1;
  private h = 1;

  constructor(root: HTMLElement, camera: THREE.PerspectiveCamera) {
    this.root = root;
    this.camera = camera;
  }

  build(res: LayoutResult, categoryColor: Map<string, string>) {
    this.root.innerHTML = '';
    this.items = [];

    // 时代名：沿塔身外侧弧形排布（每 90° 一个副本，随视角旋转始终可见其一）
    for (const ring of res.rings) {
      const COPIES = 4;
      for (let c = 0; c < COPIES; c++) {
        const a = (Math.PI * 2 * c) / COPIES + Math.PI / COPIES;
        const el = document.createElement('div');
        el.className = 'era-label';
        el.innerHTML = `<b>${ring.era.nameZh}</b><span>${ring.era.subtitle ?? ''}</span>`;
        el.dataset.ring = String(res.rings.indexOf(ring));
        this.root.appendChild(el);
        this.items.push({
          el,
          pos: new THREE.Vector3(
            Math.cos(a) * (ring.radius + 5),
            ring.y + 1.2,
            Math.sin(a) * (ring.radius + 5)
          ),
          kind: 'era',
          ringIndex: res.rings.indexOf(ring),
          priority: 1000,
          baseOpacity: 0.9,
        });
      }
    }

    // 学科扇区名：每层每个扇区一个，位于扇区中心角、圆盘外缘
    res.rings.forEach((ring, ri) => {
      for (const sec of ring.sectors) {
        const el = document.createElement('div');
        el.className = 'sector-label';
        el.style.setProperty('--c', categoryColor.get(sec.cat.id) ?? '#8aa');
        el.innerHTML = `<b>${sec.cat.nameZh}</b><em>${sec.count}</em>`;
        this.root.appendChild(el);
        const a = (sec.angleStart + sec.angleEnd) / 2;
        this.items.push({
          el,
          pos: new THREE.Vector3(
            Math.cos(a) * (ring.radius + 3.2),
            ring.y + 0.2,
            Math.sin(a) * (ring.radius + 3.2)
          ),
          kind: 'sector',
          ringIndex: ri,
          priority: 500,
          baseOpacity: 0.9,
        });
      }
    });

    // 节点名：中文 + 英文双行
    for (const n of res.nodes) {
      const el = document.createElement('div');
      el.className = 'node-label';
      el.innerHTML = n.nameEn
        ? `<b>${n.nameZh}</b><i>${n.nameEn}</i>`
        : `<b>${n.nameZh}</b>`;
      el.style.setProperty('--c', categoryColor.get(n.categoryId) ?? '#8aa');
      this.root.appendChild(el);
      this.items.push({
        el,
        pos: n.pos.clone().add(new THREE.Vector3(0, n.radius + 1.1, 0)),
        nodeId: n.id,
        kind: 'node',
        priority: n.importance * 1000 - n.year,
        baseOpacity: 0.72,
      });
    }
  }

  setSize(w: number, h: number) {
    this.w = w;
    this.h = h;
  }

  /**
   * 漫游模式：只显示当前层的「时代名 + 学科扇区名」，节点名全部隐藏。
   * 学科名随圆盘出现/消失（未到达的层整体隐去）。
   */
  updateTour(
    ringIndex: number,
    /** 已显现的节点 id（漫游时逐个弹入，只给已显现的显示名字） */
    appeared?: Set<string>,
    /** 最多显示多少个节点名（按到相机距离取最近） */
    nodeCap = 60
  ) {
    const v = new THREE.Vector3();
    const camPos = this.camera.position;

    // 先收集当前层的时代名 / 学科名
    for (const item of this.items) {
      if (item.kind === 'node') continue;
      const on = item.ringIndex === ringIndex;
      if (!on) { item.el.style.display = 'none'; continue; }
      v.copy(item.pos).project(this.camera);
      if (v.z >= 1 || v.z <= -1) { item.el.style.display = 'none'; continue; }
      const x = (v.x * 0.5 + 0.5) * this.w;
      const y = (-v.y * 0.5 + 0.5) * this.h;
      item.el.style.display = 'block';
      item.el.style.transform = `translate(-50%,-50%) translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
      item.el.style.opacity = String(item.baseOpacity);
    }

    // 节点名：仅显示当前层「已显现」且离相机最近的若干个
    const cand: { item: LabelItem; d: number; x: number; y: number }[] = [];
    for (const item of this.items) {
      if (item.kind !== 'node') continue;
      if (!item.nodeId || !(appeared?.has(item.nodeId) ?? false)) {
        item.el.style.display = 'none';
        continue;
      }
      v.copy(item.pos).project(this.camera);
      if (v.z >= 1 || v.z <= -1) { item.el.style.display = 'none'; continue; }
      cand.push({
        item,
        d: camPos.distanceTo(item.pos),
        x: (v.x * 0.5 + 0.5) * this.w,
        y: (-v.y * 0.5 + 0.5) * this.h,
      });
    }
    // 重要度高的优先保留，其次近的优先
    cand.sort((a, b) => b.item.priority - a.item.priority || a.d - b.d);
    const shown = new Set(cand.slice(0, nodeCap).map((c) => c.item));
    for (const c of cand) {
      if (!shown.has(c.item)) { c.item.el.style.display = 'none'; continue; }
      c.item.el.style.display = 'block';
      c.item.el.style.transform = `translate(-50%,-50%) translate(${c.x.toFixed(1)}px,${c.y.toFixed(1)}px)`;
      c.item.el.style.opacity = String(c.item.baseOpacity);
    }
  }

  /** 每帧更新：投影 + 按距离取最近 N 个 */
  update(
    visibleCount: number,
    hidden?: (id?: string) => boolean,
    /** 始终显示名字的节点（如悬停高亮的先修链） */
    alwaysShow?: Set<string>
  ) {
    const v = new THREE.Vector3();
    const camPos = this.camera.position;

    const scored: { item: LabelItem; d: number; x: number; y: number; vis: boolean }[] = [];
    for (const item of this.items) {
      v.copy(item.pos).project(this.camera);
      const vis = v.z < 1 && v.z > -1;
      scored.push({
        item,
        d: camPos.distanceTo(item.pos),
        x: (v.x * 0.5 + 0.5) * this.w,
        y: (-v.y * 0.5 + 0.5) * this.h,
        vis,
      });
    }

    const nodeScored = scored
      .filter((s) => s.item.kind === 'node' && s.vis)
      .sort((a, b) => a.d - b.d);
    const allowed = new Set(nodeScored.slice(0, visibleCount).map((s) => s.item));

    for (const s of scored) {
      const el = s.item.el;
      if (!s.vis) { el.style.display = 'none'; continue; }
      if (hidden && hidden(s.item.nodeId)) { el.style.display = 'none'; continue; }

      // 学科扇区名在非漫游时也要显示（帮助识别扇区归属）
      if (s.item.kind === 'sector') {
        el.style.display = 'block';
        el.style.transform = `translate(-50%,-50%) translate(${s.x.toFixed(1)}px,${s.y.toFixed(1)}px)`;
        el.style.opacity = String(0.55 * THREE.MathUtils.clamp(1 - (s.d - 60) / 200, 0.2, 1));
        continue;
      }

      if (
        s.item.kind === 'node' &&
        !allowed.has(s.item) &&
        !(s.item.nodeId && alwaysShow?.has(s.item.nodeId))
      ) {
        el.style.display = 'none';
        continue;
      }
      el.style.display = 'block';
      el.style.transform = `translate(-50%,-50%) translate(${s.x.toFixed(1)}px,${s.y.toFixed(1)}px)`;
      // 远处淡出
      const fade = THREE.MathUtils.clamp(1 - (s.d - 60) / 160, 0.15, 1);
      el.style.opacity = String(s.item.baseOpacity * fade);
    }
  }
}

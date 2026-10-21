import * as THREE from 'three';

export interface Node {
  id: string;
  nameZh: string;
  nameEn: string;
  year: number;
  eraId: string;
  categoryId: string;
  importance: number;
  faces?: number;
  prereqs: string[];
  descZh: string;
  grade: number;
  semester?: number | null;
  stage: string;
  book: string;
  repoPath: string;
  // ---- 布局写入 ----
  pos: THREE.Vector3;
  radius: number;
  angle: number;
  ringIndex: number;
  /** 漫游起显时刻（秒） */
  appearTime: number;
}

export interface Era {
  id: string;
  nameZh: string;
  nameEn: string;
  subtitle?: string;
  yearStart: number;
  yearEnd: number;
  order: number;
  axisLabel?: string;
}

export interface Category {
  id: string;
  nameZh: string;
  nameEn: string;
  color: string;
  shape?: string;
  order: number;
}

export interface Sector {
  cat: Category;
  angleStart: number;
  angleEnd: number;
  count: number;
}

export interface Ring {
  era: Era;
  y: number;
  radius: number;
  sectors: Sector[];
  dwell: number;
  clockStart: number;
  count: number;
}

export interface Edge {
  from: Node;
  to: Node;
  growStart: number;
  growEnd: number;
  crossEra: boolean;
}

export interface LayoutResult {
  nodes: Node[];
  edges: Edge[];
  rings: Ring[];
  topY: number;
  tourDuration: number;
}

const R_BY_IMPORTANCE: Record<number, number> = { 1: 0.75, 2: 0.9, 3: 1.05, 4: 1.25, 5: 1.55 };
/** 每个节点需要的占位面积（含间距） */
const SLOT_AREA = (imp: number) => Math.PI * (R_BY_IMPORTANCE[imp] + 0.5) ** 2;

const ERA_GAP = 22;       // 相邻两层基础间距
const MIN_RADIUS = 12;
/** 层圆盘被节点占用的目标面积比例 */
const FILL = 0.5;
const TOUR_TOTAL = 78;    // 全片时长（秒）
const MIN_DWELL = 4.5;

/**
 * 圆柱塔布局
 *  - Y：每个时代一层，自下而上
 *  - 角度：同一层按领域节点数占比切扇区，领域次序全局固定
 *  - 面数 / 半径：重要度
 *  - 层半径：由「需求面积」推出，使各扇区密度一致
 *  - 层内：扇区内按同心环排布 + 角度/半径微扰，避免重叠
 */
export function layout(
  rawTechs: Omit<Node, 'pos' | 'radius' | 'angle' | 'ringIndex' | 'appearTime'>[],
  erasRaw: Era[],
  categoriesRaw: Category[]
): LayoutResult {
  const eras = [...erasRaw].sort((a, b) => a.yearStart - b.yearStart);
  const cats = [...categoriesRaw].sort((a, b) => a.order - b.order);

  const nodes: Node[] = [];
  const rings: Ring[] = [];
  let y = 0;

  for (const era of eras) {
    const items = rawTechs
      .filter((t) => t.eraId === era.id)
      .sort((a, b) => a.year - b.year || a.nameZh.localeCompare(b.nameZh));
    const total = items.length || 1;

    // ---- 扇区：领域次序固定，宽度按本层数量占比 ----
    const countByCat = new Map<string, number>();
    for (const t of items) countByCat.set(t.categoryId, (countByCat.get(t.categoryId) ?? 0) + 1);
    const sectors: Sector[] = [];
    let cursor = 0;
    for (const c of cats) {
      const cnt = countByCat.get(c.id);
      if (!cnt) continue;
      const width = (cnt / total) * Math.PI * 2;
      sectors.push({ cat: c, angleStart: cursor, angleEnd: cursor + width, count: cnt });
      cursor += width;
    }

    // ---- 层半径：由「需求面积最大的扇区」决定 ----
    // 对每个扇区：把它的面积需求归一到「若占满整圈」的等效需求，
    // 取最大值反推 R，即可保证任意一个扇区的密度都不超过设计上限（各扇区密度均衡）。
    let maxEquivArea = 0;
    for (const sec of sectors) {
      const area = items
        .filter((t) => t.categoryId === sec.cat.id)
        .reduce((s, t) => s + SLOT_AREA(t.importance), 0);
      const share = (sec.angleEnd - sec.angleStart) / (Math.PI * 2);
      if (share > 0) maxEquivArea = Math.max(maxEquivArea, area / share);
    }
    const R = Math.max(MIN_RADIUS, Math.sqrt(maxEquivArea / (Math.PI * FILL)));

    // ---- 层内：扇区内同心环排布 + 拥挤度扩散 ----
    const layerNodes: Node[] = [];
    for (const sec of sectors) {
      const list = items.filter((t) => t.categoryId === sec.cat.id);
      const span = sec.angleEnd - sec.angleStart;
      const ringCount = Math.max(1, Math.ceil(Math.sqrt(list.length / 2)));
      const inner = Math.min(3.5, R * 0.25);
      let k = 0;
      for (let ri = 0; ri < ringCount; ri++) {
        const rr = inner + ((R - inner) * (ri + 0.6)) / ringCount;
        const remain = list.length - k;
        const capPerRing = Math.max(1, Math.floor((span * rr) / 2.9));
        const take = ri === ringCount - 1 ? remain : Math.min(capPerRing, remain);
        for (let i = 0; i < take; i++, k++) {
          const t = list[k];
          const a = sec.angleStart + (span * (i + 0.5)) / take;
          const aJit = a + (ri % 2 ? span / take / 4 : 0);
          const rJit = rr + (ri % 2 ? 0.8 : -0.4);
          const pos = new THREE.Vector3(Math.cos(aJit) * rJit, y, Math.sin(aJit) * rJit);
          const node: Node = {
            ...t,
            pos,
            angle: aJit,
            radius: R_BY_IMPORTANCE[t.importance] ?? 1,
            ringIndex: rings.length,
            appearTime: 0,
          };
          layerNodes.push(node);
        }
      }
    }
    // 拥挤度扩散：同层内邻近节点互相推开（只在本层内做松弛，成本可控）
    relax(nodes.concat(layerNodes), layerNodes, y, R);
    nodes.push(...layerNodes);

    rings.push({
      era, y, radius: R, sectors,
      dwell: MIN_DWELL + items.length * 0.16,
      clockStart: 0,
      count: items.length,
    });
    y += ERA_GAP + R * 0.5;
  }

  // ---- 漫游排期：按层分配时长，层内按 year 逐个显现 ----
  const sumDwell = rings.reduce((s, r) => s + r.dwell, 0);
  const scale = TOUR_TOTAL / Math.max(1, sumDwell);
  let clock = 0;
  for (const ring of rings) {
    ring.dwell *= scale;
    ring.clockStart = clock;
    const arr = nodes
      .filter((n) => n.ringIndex === rings.indexOf(ring))
      .sort((a, b) => a.year - b.year || a.nameZh.localeCompare(b.nameZh));
    const step = ring.dwell / Math.max(1, arr.length);
    arr.forEach((n, i) => { n.appearTime = clock + i * step; });
    clock += ring.dwell;
  }

  // ---- 生长式依赖边 ----
  const idMap = new Map(nodes.map((n) => [n.id, n]));
  const edges: Edge[] = [];
  const GROW = 1.5;
  for (const n of nodes) {
    for (const p of n.prereqs) {
      const from = idMap.get(p);
      if (!from) continue;
      let growStart = from.appearTime + GROW * 0.25;
      const growEnd = Math.max(n.appearTime, growStart + 0.2);
      if (growEnd - growStart > GROW) growStart = growEnd - GROW;
      edges.push({
        from, to: n, growStart, growEnd,
        crossEra: from.eraId !== n.eraId,
      });
    }
  }

  return { nodes, edges, rings, topY: y + 10, tourDuration: clock };
}

export function radiusForImportance(imp: number) {
  return R_BY_IMPORTANCE[imp] ?? 1;
}

/**
 * 拥挤度扩散：在同一层内做若干轮松弛，令互相重叠的节点向外推开。
 * 只在扇区预排布之后执行，且限定在同一层（y 相同）内比较，
 * 因此每轮成本为 O(n²)，n 为单层节点数，初始化一次即可。
 */
function relax(allNodes: Node[], layerNodes: Node[], y: number, R: number) {
  const ITER = 6;
  const minGap = (a: Node, b: Node) => (a.radius + b.radius) * 1.35;
  for (let it = 0; it < ITER; it++) {
    let moved = false;
    for (let i = 0; i < layerNodes.length; i++) {
      for (let j = i + 1; j < layerNodes.length; j++) {
        const a = layerNodes[i], b = layerNodes[j];
        const dx = b.pos.x - a.pos.x;
        const dz = b.pos.z - a.pos.z;
        const d = Math.hypot(dx, dz);
        const need = minGap(a, b);
        if (d >= need || d < 1e-6) continue;
        // 沿连线方向把两点各推开一半
        const push = (need - d) / 2;
        const ux = dx / d, uz = dz / d;
        a.pos.x -= ux * push; a.pos.z -= uz * push;
        b.pos.x += ux * push; b.pos.z += uz * push;
        moved = true;
      }
    }
    // 夹回本层半径范围内，避免被推出圆盘
    for (const n of layerNodes) {
      const r = Math.hypot(n.pos.x, n.pos.z);
      const lim = R * 1.02;
      if (r > lim) {
        const s = lim / r;
        n.pos.x *= s; n.pos.z *= s;
      }
      n.pos.y = y;
      n.angle = Math.atan2(n.pos.z, n.pos.x);
    }
    if (!moved) break;
  }
  void allNodes;
}

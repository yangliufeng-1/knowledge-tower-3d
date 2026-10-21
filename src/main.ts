import * as THREE from 'three';
import techsRaw from '../data/techs.json';
import erasRaw from '../data/eras.json';
import catsRaw from '../data/categories.json';
import { layout, type Category, type Era } from './layout';
import { buildPolyhedra, writeInstance } from './polyhedra';
import { buildEdges, buildRings } from './edges';
import { buildScene, buildReference } from './scene';
import { OrbitCam } from './controls';
import { LabelLayer } from './labels';
import { Tour, fovForDisc, popScale, popFlash } from './tour';
import { buildColorMap, decorate, type RawTech } from './data';
import './styles.css';

// ---------------- 数据 ----------------
const eras = erasRaw as Era[];
const cats = catsRaw as Category[];
const techs = techsRaw as RawTech[];
const colorMap = buildColorMap(cats);

const res = layout(techs as never, eras, cats);
const viewNodes = decorate(res.nodes, cats, eras);
const idMap = new Map(viewNodes.map((n) => [n.id, n]));

// ---------------- 三条视觉通道的说明（全部由数据推得，不写死） ----------------
const stats = {
  nodes: viewNodes.length,
  edges: res.edges.length,
  eras: res.rings.length,
  cats: cats.length,
  roots: viewNodes.filter((n) => n.prereqs.length === 0).length,
  maxDepth: (() => {
    const memo = new Map<string, number>();
    const go = (id: string): number => {
      if (memo.has(id)) return memo.get(id)!;
      const n = idMap.get(id);
      const d = !n || n.prereqs.length === 0 ? 0 : 1 + Math.max(...n.prereqs.map(go));
      memo.set(id, d);
      return d;
    };
    return Math.max(...viewNodes.map((n) => go(n.id)));
  })(),
};

// ---------------- 渲染器 / 场景 ----------------
const stage = document.getElementById('stage') as HTMLCanvasElement;
const labelRoot = document.getElementById('labels') as HTMLDivElement;
const renderer = new THREE.WebGLRenderer({ canvas: stage, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);

const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.5, 4000);
const { scene } = buildScene(res.topY);
scene.add(buildReference(res.topY));

const nodeView = buildPolyhedra(viewNodes);
scene.add(nodeView.group);

const edgeView = buildEdges(res, colorMap);
scene.add(edgeView.lines);

const ringGroup = buildRings(res, colorMap);
scene.add(ringGroup);

const labels = new LabelLayer(labelRoot, camera);
labels.build(res, colorMap);
labels.setSize(innerWidth, innerHeight);

const cam = new OrbitCam(camera, stage);
cam.target.set(0, res.topY * 0.42, 0);
cam.distance = res.topY * 1.55;
cam.phi = Math.PI * 0.36;

function onResize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  labels.setSize(innerWidth, innerHeight);
}
addEventListener('resize', onResize);

// ---------------- 依赖：邻接表（用于悬停高亮先修链） ----------------
const parentMap = new Map<string, string[]>();
const childMap = new Map<string, string[]>();
for (const n of viewNodes) {
  parentMap.set(n.id, n.prereqs);
  for (const p of n.prereqs) {
    if (!childMap.has(p)) childMap.set(p, []);
    childMap.get(p)!.push(n.id);
  }
}
function ancestors(id: string, set = new Set<string>()): Set<string> {
  for (const p of parentMap.get(id) ?? []) if (!set.has(p)) { set.add(p); ancestors(p, set); }
  return set;
}
function descendants(id: string, set = new Set<string>()): Set<string> {
  for (const c of childMap.get(id) ?? []) if (!set.has(c)) { set.add(c); descendants(c, set); }
  return set;
}

// ---------------- 交互：悬停拾取 ----------------
const raycaster = new THREE.Raycaster();
raycaster.params.Line = { threshold: 0.1 };
const pointer = new THREE.Vector2();
let hovered: string | null = null;
let hoveredChain: Set<string> = new Set();
let hoveredAnc: Set<string> = new Set();
let hoveredDesc: Set<string> = new Set();
const card = document.getElementById('card') as HTMLDivElement;
const tooltip = document.getElementById('tooltip') as HTMLDivElement;

stage.addEventListener('pointermove', (e) => {
  if (tour.state.active) return;
  pointer.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(nodeView.batches.map((b) => b.mesh), false);
  let found: string | null = null;
  if (hits.length) {
    const h = hits[0];
    const batch = nodeView.batches.find((b) => b.mesh === h.object);
    const inst = h.instanceId;
    if (batch && inst !== undefined) found = batch.map[inst].id;
  }
  if (found !== hovered) {
    hovered = found;
    if (found) {
      const n = idMap.get(found)!;
      hoveredAnc = ancestors(found);
      hoveredDesc = descendants(found);
      hoveredChain = new Set([...hoveredAnc, ...hoveredDesc, found]);
      showTooltip(n, e.clientX, e.clientY);
      stage.style.cursor = 'pointer';
    } else {
      hoveredChain = new Set();
      tooltip.style.display = 'none';
      stage.style.cursor = 'grab';
    }
  } else if (found) {
    moveTooltip(e.clientX, e.clientY);
  }
});

stage.addEventListener('click', () => {
  if (tour.state.active) return;
  if (hovered) showCard(hovered);
});

function showTooltip(n: (typeof viewNodes)[number], x: number, y: number) {
  tooltip.innerHTML = `<b>${n.nameZh}</b><span>${n.nameEn}</span>
    <div class="t-meta"><i style="background:${n.categoryColor}"></i>${n.categoryName} · ${n.eraName} · ${n.grade} 年级</div>
    <div class="t-stars">${'★'.repeat(n.importance)}${'☆'.repeat(5 - n.importance)}</div>`;
  tooltip.style.display = 'block';
  moveTooltip(x, y);
}
function moveTooltip(x: number, y: number) {
  const w = tooltip.offsetWidth, h = tooltip.offsetHeight;
  tooltip.style.left = Math.min(x + 16, innerWidth - w - 12) + 'px';
  tooltip.style.top = Math.min(y + 16, innerHeight - h - 12) + 'px';
}

// ---------------- 详情卡 ----------------
function showCard(id: string) {
  const n = idMap.get(id)!;
  const pres = n.prereqs.map((p) => `<span class="lnk" data-id="${p}">${idMap.get(p)?.nameZh ?? p}</span>`).join('') ||
    '<i class="none">无（起点知识点）</i>';
  const kids = (childMap.get(id) ?? []).map((k) => `<span class="lnk" data-id="${k}">${idMap.get(k)?.nameZh ?? k}</span>`).join('') ||
    '<i class="none">暂无后续</i>';
  card.innerHTML = `
    <button class="x" title="关闭">✕</button>
    <h3>${n.nameZh}</h3>
    <p class="en">${n.nameEn}</p>
    <div class="meta">
      <span class="pill" style="background:${n.categoryColor}">${n.categoryName}</span>
      <span class="pill" style="background:#4b5a72">${n.eraName}</span>
      <span class="stars">${'★'.repeat(n.importance)}${'☆'.repeat(5 - n.importance)}</span>
      <div class="kv">年级 ${n.grade}${n.semester ? ` · 第 ${n.semester} 学期` : ''} · ${n.stage || ''}</div>
      ${n.book ? `<div class="kv">教材 ${n.book}</div>` : ''}
    </div>
    <p class="desc">${n.descZh}</p>
    <div class="sec"><b>前置知识点（先学）</b><div>${pres}</div></div>
    <div class="sec"><b>后续知识点（后学）</b><div>${kids}</div></div>
    ${n.repoPath ? `<a class="repo" href="${n.repoPath}" target="_blank" rel="noopener">📖 对应教材目录</a>` : ''}
  `;
  card.style.display = 'block';
  card.querySelector('.x')?.addEventListener('click', () => (card.style.display = 'none'));
  card.querySelectorAll<HTMLElement>('.lnk').forEach((el) =>
    el.addEventListener('click', () => focusNode(el.dataset.id!))
  );
}

function focusNode(id: string) {
  const n = idMap.get(id);
  if (!n) return;
  showCard(id);
  cam.target.copy(n.pos);
  cam.distance = Math.min(cam.distance, 90);
  hovered = id;
  hoveredAnc = ancestors(id);
  hoveredDesc = descendants(id);
  hoveredChain = new Set([...hoveredAnc, ...hoveredDesc, id]);
}

// ---------------- UI：图例 / 滑块 / 按钮 ----------------
const legendList = document.getElementById('legendList') as HTMLDivElement;
const disabledCats = new Set<string>();
cats.forEach((c) => {
  const row = document.createElement('button');
  row.className = 'lg';
  row.innerHTML = `<i style="background:${c.color}"></i>${c.nameZh}<em>${viewNodes.filter((n) => n.categoryId === c.id).length}</em>`;
  row.addEventListener('click', () => {
    if (disabledCats.has(c.id)) disabledCats.delete(c.id);
    else disabledCats.add(c.id);
    row.classList.toggle('off');
    applyCategoryFilter();
  });
  legendList.appendChild(row);
});

function applyCategoryFilter() {
  for (const b of nodeView.batches) {
    b.map.forEach((n, i) => {
      const off = disabledCats.has(n.categoryId);
      writeInstance(b, i, 1, !off);
    });
  }
  for (let i = 0; i < res.edges.length; i++) {
    const e = res.edges[i];
    if (disabledCats.has(e.from.categoryId) || disabledCats.has(e.to.categoryId)) {
      edgeView.positions.fill(0, i * 180, i * 180 + 180);
    }
  }
  edgeView.lines.geometry.attributes.position.needsUpdate = true;
}

const labelCount = document.getElementById('labelCount') as HTMLInputElement;
const labelCountVal = document.getElementById('labelCountVal') as HTMLElement;
let labelN = Number(labelCount.value);
labelCount.addEventListener('input', () => {
  labelN = Number(labelCount.value);
  labelCountVal.textContent = String(labelN);
});
labelCountVal.textContent = String(labelN);

// ---------------- 漫游 ----------------
const tour = new Tour(res);
const btnTour = document.getElementById('btnTour') as HTMLButtonElement;
const btnReset = document.getElementById('btnReset') as HTMLButtonElement;
const tourBar = document.getElementById('tourBar') as HTMLDivElement;
const tourFill = document.getElementById('tourFill') as HTMLDivElement;
const uiRoot = document.body;

const SEG = 10;
const PER_EDGE = SEG * 2 * 3;
function writeEdgeProgress(i: number, p: number) {
  const e = res.edges[i];
  const base = i * PER_EDGE;
  const pos = edgeView.positions;
  if (p <= 0) {
    pos.fill(0, base, base + PER_EDGE);
    return;
  }
  const a = e.from.pos, d = e.to.pos;
  const b = new THREE.Vector3(a.x, a.y + (d.y - a.y) * 0.45, a.z);
  const c = new THREE.Vector3(d.x, d.y - (d.y - a.y) * 0.45, d.z);
  const mid = new THREE.Vector3().addVectors(a, d).multiplyScalar(0.5);
  const bulge = a.distanceTo(d) * 0.1;
  const out = new THREE.Vector3(mid.x, 0, mid.z).normalize().multiplyScalar(bulge);
  b.add(out); c.add(out);

  let px = a.x, py = a.y, pz = a.z;
  for (let s = 0; s <= SEG; s++) {
    const t = s / SEG;
    const it = 1 - t;
    const x = it ** 3 * a.x + 3 * it * it * t * b.x + 3 * it * t * t * c.x + t ** 3 * d.x;
    const y2 = it ** 3 * a.y + 3 * it * it * t * b.y + 3 * it * t * t * c.y + t ** 3 * d.y;
    const z = it ** 3 * a.z + 3 * it * it * t * b.z + 3 * it * t * t * c.z + t ** 3 * d.z;
    if (s > 0) {
      const off = base + (s - 1) * 6;
      if ((s - 1) / SEG <= p) {
        pos[off] = px; pos[off + 1] = py; pos[off + 2] = pz;
        pos[off + 3] = x; pos[off + 4] = y2; pos[off + 5] = z;
      } else {
        pos[off] = pos[off + 1] = pos[off + 2] = pos[off + 3] = pos[off + 4] = pos[off + 5] = 0;
      }
    }
    px = x; py = y2; pz = z;
  }
}

let staticDirty = true;

function startTour() {
  tour.start();
  cam.enabled = false;
  uiRoot.classList.add('touring');
  tourBar.style.display = 'block';
  // 初始全部隐藏
  for (const b of nodeView.batches) for (let i = 0; i < b.map.length; i++) writeInstance(b, i, 1, false);
  for (let i = 0; i < res.edges.length; i++) writeEdgeProgress(i, 0);
  edgeView.lines.geometry.attributes.position.needsUpdate = true;
}

function stopTour() {
  tour.stop();
  cam.enabled = true;
  uiRoot.classList.remove('touring');
  tourBar.style.display = 'none';
  camera.fov = 46;
  camera.updateProjectionMatrix();
  // 恢复全部可见
  for (const b of nodeView.batches) for (let i = 0; i < b.map.length; i++) writeInstance(b, i, 1, true);
  staticDirty = true;
}

btnTour.addEventListener('click', () => (tour.state.active ? stopTour() : startTour()));
btnReset.addEventListener('click', () => {
  cam.target.set(0, res.topY * 0.42, 0);
  cam.distance = res.topY * 1.55;
  cam.theta = Math.PI * 0.25;
  cam.phi = Math.PI * 0.36;
  card.style.display = 'none';
  hovered = null;
  hoveredChain = new Set();
});
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (tour.state.active) stopTour();
    else { card.style.display = 'none'; hoveredChain = new Set(); hovered = null; }
  }
  if (e.key === '/' ) {
    e.preventDefault();
    (document.getElementById('searchInput') as HTMLInputElement)?.focus();
  }
});
tourBar.addEventListener('click', () => stopTour());

// ---------------- 搜索 ----------------
const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const searchResults = document.getElementById('searchResults') as HTMLDivElement;
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.style.display = 'none'; return; }
  const hits = viewNodes
    .filter((n) => n.nameZh.toLowerCase().includes(q) || n.nameEn.toLowerCase().includes(q))
    .slice(0, 24);
  searchResults.innerHTML = hits.length
    ? hits.map((n) => `<button data-id="${n.id}"><i style="background:${n.categoryColor}"></i>${n.nameZh}<em>${n.categoryName} · ${n.eraName}</em></button>`).join('')
    : '<p class="empty">没有匹配的知识点</p>';
  searchResults.style.display = 'block';
  searchResults.querySelectorAll<HTMLButtonElement>('button[data-id]').forEach((b) =>
    b.addEventListener('click', () => {
      searchResults.style.display = 'none';
      searchInput.value = '';
      focusNode(b.dataset.id!);
    })
  );
});

// ---------------- 渲染循环 ----------------
const clock = new THREE.Clock();
const tmpColor = new THREE.Color();
/** 漫游中已显现的节点 id（每帧重算） */
const appeared = new Set<string>();

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);

  if (tour.state.active) {
    const t = tour.tick(dt);
    if (t) {
      // 相机沿中轴线上升，视线朝下
      const ring = res.rings[tour.state.currentRing];
      cam.target.set(0, t.y, 0);
      cam.distance = (ring?.radius ?? 20) * 1.9 + 14;
      cam.phi = 0.03;
      cam.clearInertia();
      cam.enabled = false;
      // 视线滚转 + 视场随层半径自适应
      camera.fov = fovForDisc(ring?.radius ?? 20, cam.distance);
      camera.updateProjectionMatrix();

      // 圆盘 / 时代名：未到达隐去
      ringGroup.children.forEach((c) => {
        const idx = c.userData.ringIndex as number | undefined;
        const reached = idx !== undefined && res.rings[idx] && tour.state.time >= res.rings[idx].clockStart;
        c.visible = !!reached;
      });

      // 节点显现
      const time = tour.state.time;
      for (const b of nodeView.batches) {
        b.map.forEach((n, i) => {
          const el = time - n.appearTime;
          if (el < 0) {
            writeInstance(b, i, 1, false);
            return;
          }
          const s = popScale(el);
          writeInstance(b, i, 1, true, s);
          const f = popFlash(el);
          if (f > 0) {
            tmpColor.copy(b.baseColor[i]).lerp(new THREE.Color(0xffffff), f);
            b.mesh.setColorAt(i, tmpColor);
            b.mesh.instanceColor!.needsUpdate = true;
          } else if (b.mesh.instanceColor) {
            b.mesh.setColorAt(i, b.baseColor[i]);
            b.mesh.instanceColor.needsUpdate = true;
          }
        });
      }

      // 生长式连线
      for (let i = 0; i < res.edges.length; i++) {
        const e = res.edges[i];
        let p = 0;
        if (time >= e.growEnd) p = 1;
        else if (time > e.growStart) p = (time - e.growStart) / Math.max(0.001, e.growEnd - e.growStart);
        writeEdgeProgress(i, p);
      }
      edgeView.lines.geometry.attributes.position.needsUpdate = true;
      (edgeView.lines.material as THREE.LineBasicMaterial).opacity = 0.42;

      // 滚转
      camera.up.set(Math.sin(t.roll), Math.cos(t.roll), 0);
      tourFill.style.width = (t.progress * 100).toFixed(1) + '%';
      // 漫游期间：当前层的时代名 + 学科扇区名 + 已显现节点的名字
      appeared.clear();
      for (const n of viewNodes) if (tour.state.time >= n.appearTime) appeared.add(n.id);
      labels.updateTour(tour.state.currentRing, appeared, 60);
      cam.update();
    }
  } else {
    camera.up.set(0, 1, 0);
    (edgeView.lines.material as THREE.LineBasicMaterial).opacity = 0.3;
    cam.update();

    if (staticDirty) { staticDirty = false; }

    // 悬停高亮：链上节点提亮，其余压暗
    const active = hovered !== null;
    for (const b of nodeView.batches) {
      b.map.forEach((n, i) => {
        const off = disabledCats.has(n.categoryId);
        if (off) { writeInstance(b, i, 1, false); return; }
        const inChain = active && hoveredChain.has(n.id);
        const dim = active && !inChain;
        writeInstance(b, i, dim ? 0.86 : inChain ? 1.12 : 1, true);
        if (b.mesh.instanceColor) {
          tmpColor.copy(b.baseColor[i]);
          if (dim) tmpColor.multiplyScalar(0.28);
          else if (inChain) tmpColor.lerp(new THREE.Color(0xffffff), n.id === hovered ? 0.35 : 0.12);
          b.mesh.setColorAt(i, tmpColor);
        }
      });
      if (b.mesh.instanceColor) b.mesh.instanceColor.needsUpdate = true;
    }

    // 高亮链上的边（用顶点色临时替换）
    for (let i = 0; i < res.edges.length; i++) {
      const e = res.edges[i];
      const on = active && hoveredChain.has(e.from.id) && hoveredChain.has(e.to.id);
      if (on || !edgeView.drawn?.has(i)) {
        writeEdgeProgress(i, 1);
        if (edgeView.drawn) edgeView.drawn.add(i);
      }
      const base = i * PER_EDGE;
      const col = on ? (hoveredDesc.has(e.to.id) ? 0x7fc0ff : 0xffb37f) : 0x000000;
      const c = new THREE.Color(col);
      const carr = edgeView.lines.geometry.attributes.color as THREE.BufferAttribute;
      for (let v = 0; v < PER_EDGE; v += 3) {
        if (on) { carr.array[base + v] = c.r; carr.array[base + v + 1] = c.g; carr.array[base + v + 2] = c.b; }
        else {
          const cc = new THREE.Color(colorMap.get(e.to.categoryId) ?? '#888').multiplyScalar(0.55);
          carr.array[base + v] = cc.r; carr.array[base + v + 1] = cc.g; carr.array[base + v + 2] = cc.b;
        }
      }
    }
    (edgeView.lines.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;
    edgeView.lines.geometry.attributes.position.needsUpdate = true;

    labels.update(
      labelN,
      (id) => (id ? disabledCats.has(idMap.get(id)?.categoryId ?? '') : false),
      hoveredChain.size ? hoveredChain : undefined
    );
  }

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

// 初始：所有连线完整绘制
edgeView.drawn = new Set();
for (let i = 0; i < res.edges.length; i++) writeEdgeProgress(i, 1);
edgeView.lines.geometry.attributes.position.needsUpdate = true;
edgeView.drawn = new Set([...Array(res.edges.length).keys()]);

// 顶部统计与说明
const statEl = document.getElementById('stats') as HTMLElement;
statEl.innerHTML = `
  <span><b>${stats.nodes}</b> 知识点</span>
  <span><b>${stats.edges}</b> 先修关系</span>
  <span><b>${stats.eras}</b> 认知层次</span>
  <span><b>${stats.cats}</b> 学科轨道</span>
  <span>最长先修链 <b>${stats.maxDepth}</b> 步</span>`;

// URL 参数：?tour 自动播放
if (new URLSearchParams(location.search).has('tour')) setTimeout(startTour, 600);

frame();

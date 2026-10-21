#!/usr/bin/env node
/**
 * 数据校验：数据是唯一事实源，视图层不得写死计数。
 * 校验失败以非零码退出，可直接接入 CI。
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const DATA = join(dirname(fileURLToPath(import.meta.url)), '..', 'data');
const load = (f) => JSON.parse(readFileSync(join(DATA, f), 'utf8'));

const techs = load('techs.json');
const eras = load('eras.json');
const categories = load('categories.json');

const errors = [];
const warn = [];
const err = (m) => errors.push(m);

// ---- 基础结构 ----
if (!Array.isArray(techs) || techs.length === 0) err('techs.json 必须是非空数组');
if (!Array.isArray(eras) || eras.length === 0) err('eras.json 必须是非空数组');
if (!Array.isArray(categories) || categories.length === 0) err('categories.json 必须是非空数组');

const catIds = new Set();
for (const c of categories) {
  if (!c.id) err(`领域缺少 id: ${JSON.stringify(c)}`);
  if (catIds.has(c.id)) err(`领域 id 重复: ${c.id}`);
  catIds.add(c.id);
  if (!/^#[0-9a-fA-F]{6}$/.test(c.color ?? '')) err(`领域 ${c.id} 的 color 不是合法十六进制色值`);
}

const eraIds = new Set();
const sortedEras = [...eras].sort((a, b) => a.yearStart - b.yearStart);
for (let i = 0; i < sortedEras.length; i++) {
  const e = sortedEras[i];
  if (!e.id) err(`时代缺少 id: ${JSON.stringify(e)}`);
  if (eraIds.has(e.id)) err(`时代 id 重复: ${e.id}`);
  eraIds.add(e.id);
  if (typeof e.yearStart !== 'number' || typeof e.yearEnd !== 'number')
    err(`时代 ${e.id} 的 yearStart/yearEnd 必须是数字`);
  if (e.yearStart >= e.yearEnd) err(`时代 ${e.id} 的 yearStart 必须小于 yearEnd`);
  const prev = sortedEras[i - 1];
  if (prev && prev.yearEnd > e.yearStart)
    err(`时代区间重叠：${prev.id}(${prev.yearStart},${prev.yearEnd}) 与 ${e.id}(${e.yearStart},${e.yearEnd})`);
}
// 覆盖连续性（允许空档但需提示）
for (let i = 1; i < sortedEras.length; i++) {
  if (sortedEras[i - 1].yearEnd !== sortedEras[i].yearStart)
    warn.push(`时代之间存在空档或跳变：${sortedEras[i - 1].id} → ${sortedEras[i].id}`);
}

// ---- 节点 ----
const ids = new Set();
const REQUIRED = ['id', 'nameZh', 'year', 'eraId', 'categoryId', 'importance', 'descZh'];
for (const t of techs) {
  for (const k of REQUIRED) if (t[k] === undefined || t[k] === '')
    err(`知识点 ${t.id ?? '(无 id)'} 缺少必填字段 ${k}`);
  if (ids.has(t.id)) err(`知识点 id 重复: ${t.id}`);
  ids.add(t.id);
  if (typeof t.year !== 'number' || !Number.isFinite(t.year))
    err(`知识点 ${t.id} 的 year 不是有效数字`);
  const era = sortedEras.find((e) => e.id === t.eraId);
  if (!era) err(`知识点 ${t.id} 的 eraId 不存在: ${t.eraId}`);
  else if (t.year < era.yearStart || t.year >= era.yearEnd)
    err(`知识点 ${t.id} 的 year=${t.year} 不在时代 ${t.eraId}[${era.yearStart}, ${era.yearEnd}) 内`);
  if (!catIds.has(t.categoryId)) err(`知识点 ${t.id} 的 categoryId 不存在: ${t.categoryId}`);
  if (!Number.isInteger(t.importance) || t.importance < 1 || t.importance > 5)
    err(`知识点 ${t.id} 的 importance 必须是 1-5 的整数`);
  if (typeof t.descZh !== 'string' || t.descZh.length > 80)
    err(`知识点 ${t.id} 的 descZh 必须 ≤ 80 字（当前 ${t.descZh?.length}）`);
  if (!Array.isArray(t.prereqs)) err(`知识点 ${t.id} 的 prereqs 必须是数组`);
}

// ---- 依赖引用 ----
let edgeCount = 0;
for (const t of techs) {
  const seen = new Set();
  for (const p of t.prereqs ?? []) {
    if (!ids.has(p)) err(`知识点 ${t.id} 的 prereqs 引用了不存在的 id: ${p}`);
    if (p === t.id) err(`知识点 ${t.id} 引用了自身`);
    if (seen.has(p)) err(`知识点 ${t.id} 重复引用前置: ${p}`);
    seen.add(p);
    edgeCount++;
  }
}

// ---- 环检测（先修关系必须是有向无环图：简单节点是复杂节点的前置）----
const byId = new Map(techs.map((t) => [t.id, t]));
const state = new Map(); // 0 未访问 / 1 访问中 / 2 完成
const cycleNodes = new Set();
function dfs(id, stack) {
  const s = state.get(id) ?? 0;
  if (s === 2) return;
  if (s === 1) {
    const i = stack.indexOf(id);
    stack.slice(i).forEach((x) => cycleNodes.add(x));
    return;
  }
  state.set(id, 1);
  stack.push(id);
  for (const p of byId.get(id)?.prereqs ?? []) if (byId.has(p)) dfs(p, stack);
  stack.pop();
  state.set(id, 2);
}
for (const t of techs) dfs(t.id, []);
if (cycleNodes.size) err(`先修关系存在环：${[...cycleNodes].join(' → ')}`);

// ---- 设计前提（不写死分位数，避免数据挪动后假故障）----
const indeg = new Map(techs.map((t) => [t.id, 0]));
for (const t of techs) for (const p of t.prereqs ?? []) indeg.set(p, (indeg.get(p) ?? 0) + 1);
const roots = [...indeg.entries()].filter(([, v]) => v === 0).length;
if (roots === 0) err('不存在任何根知识点（无前置），先修图不可能成立');
const rootRatio = roots / techs.length;
if (rootRatio > 0.2) warn.push(`根知识点占比 ${(rootRatio * 100).toFixed(1)}% 偏高（设计前提 ≤ 20%）`);

// 每个知识点都必须能追溯到至少一个根节点
const reachRoot = new Set();
function canReachRoot(id, seen = new Set()) {
  if (reachRoot.has(id)) return true;
  if (seen.has(id)) return false;
  seen.add(id);
  const t = byId.get(id);
  if (!t) return false;
  if (!t.prereqs?.length) { reachRoot.add(id); return true; }
  const ok = t.prereqs.some((p) => canReachRoot(p, seen));
  if (ok) reachRoot.add(id);
  return ok;
}
for (const t of techs) if (!canReachRoot(t.id)) err(`知识点 ${t.id} 无法追溯到根节点`);

const catCount = new Map();
for (const t of techs) catCount.set(t.categoryId, (catCount.get(t.categoryId) ?? 0) + 1);
for (const c of categories) if (!catCount.get(c.id)) warn.push(`领域 ${c.id} 没有任何知识点`);

// ---- 报告 ----
console.log(`节点 ${techs.length} · 依赖 ${edgeCount} · 时代 ${eras.length} · 领域 ${categories.length}`);
console.log(`根节点 ${roots}（${(rootRatio * 100).toFixed(1)}%） · 学科分布：` +
  [...catCount.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(' '));
for (const w of warn) console.warn('⚠️  ' + w);
if (errors.length) {
  for (const e of errors) console.error('✖ ' + e);
  console.error(`\n校验失败：${errors.length} 个错误`);
  process.exit(1);
}
console.log('✔ 数据校验通过');

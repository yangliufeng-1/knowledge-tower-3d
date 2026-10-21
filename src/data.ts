import type { Node, Era, Category } from './layout';

export interface RawTech {
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
  grade?: number;
  semester?: number | null;
  stage?: string;
  book?: string;
  repoPath?: string;
}

export function buildColorMap(categories: Category[]): Map<string, string> {
  return new Map(categories.map((c) => [c.id, c.color]));
}

/** 节点 + 领域色合并（视图层需要的完整视图对象） */
export type ViewNode = Node & { categoryColor: string; eraName: string; categoryName: string };

export function decorate(
  nodes: Node[],
  categories: Category[],
  eras: Era[]
): ViewNode[] {
  const cm = new Map(categories.map((c) => [c.id, c]));
  const em = new Map(eras.map((e) => [e.id, e]));
  return nodes.map((n) => ({
    ...n,
    categoryColor: cm.get(n.categoryId)?.color ?? '#8899aa',
    categoryName: cm.get(n.categoryId)?.nameZh ?? n.categoryId,
    eraName: em.get(n.eraId)?.nameZh ?? n.eraId,
  }));
}

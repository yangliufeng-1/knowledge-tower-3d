import * as THREE from 'three';
import type { ViewNode } from './data';

/** 重要度 → BufferGeometry（面数编码重要度） */
export function geometryFor(importance: number): THREE.BufferGeometry {
  switch (importance) {
    case 5: return new THREE.IcosahedronGeometry(1, 1);   // 20 面
    case 4: return new THREE.DodecahedronGeometry(1, 0);  // 12 面
    case 3: return new THREE.OctahedronGeometry(1, 1);    // 8 面 ×4
    case 2: return new THREE.BoxGeometry(1.25, 1.25, 1.25);
    default: return new THREE.TetrahedronGeometry(1.3, 0); // 4 面
  }
}

export interface PolyBatch {
  importance: number;
  mesh: THREE.InstancedMesh;
  map: ViewNode[];
  material: THREE.MeshStandardMaterial;
  baseScale: number[];
  basePos: THREE.Vector3[];
  baseColor: THREE.Color[];
}

export interface NodeView {
  batches: PolyBatch[];
  index: Map<string, { batch: PolyBatch; instanceId: number }>;
  group: THREE.Group;
}

const dummy = new THREE.Object3D();

/** 逐节点写回实例矩阵（支持弹入缩放 / 漫游隐藏） */
export function writeInstance(
  batch: PolyBatch,
  i: number,
  scale = 1,
  visible = true,
  extraScale = 1
) {
  const s = visible ? batch.baseScale[i] * scale * extraScale : 0.0001;
  dummy.position.copy(batch.basePos[i]);
  dummy.scale.setScalar(s);
  dummy.rotation.set(0, 0, 0);
  dummy.updateMatrix();
  batch.mesh.setMatrixAt(i, dummy.matrix);
  batch.mesh.instanceMatrix.needsUpdate = true;
}

export function buildPolyhedra(nodes: ViewNode[], opacity = 1): NodeView {
  const group = new THREE.Group();
  const byImp = new Map<number, ViewNode[]>();
  for (const n of nodes) {
    if (!byImp.has(n.importance)) byImp.set(n.importance, []);
    byImp.get(n.importance)!.push(n);
  }

  const batches: PolyBatch[] = [];
  const index = new Map<string, { batch: PolyBatch; instanceId: number }>();

  for (const [imp, list] of [...byImp.entries()].sort((a, b) => a[0] - b[0])) {
    const geo = geometryFor(imp);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.42,
      metalness: 0.08,
      flatShading: true,
      transparent: true,
      opacity,
      emissive: new THREE.Color(0x111111),
      envMapIntensity: 0.6,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, list.length);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;

    const color = new THREE.Color();
    const baseScale: number[] = [];
    const basePos: THREE.Vector3[] = [];
    const baseColor: THREE.Color[] = [];

    list.forEach((n, i) => {
      dummy.position.copy(n.pos);
      dummy.scale.setScalar(n.radius);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      color.set(n.categoryColor);
      mesh.setColorAt(i, color);
      baseScale.push(n.radius);
      basePos.push(n.pos.clone());
      baseColor.push(color.clone());
    });
    mesh.instanceColor!.needsUpdate = true;
    mesh.instanceMatrix.needsUpdate = true;

    const batch: PolyBatch = { importance: imp, mesh, map: list, material: mat, baseScale, basePos, baseColor };
    batches.push(batch);
    list.forEach((n, i) => index.set(n.id, { batch, instanceId: i }));
    group.add(mesh);
  }

  return { batches, index, group };
}

export { dummy as _dummy };

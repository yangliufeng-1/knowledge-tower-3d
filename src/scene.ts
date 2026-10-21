import * as THREE from 'three';

export interface SceneKit {
  scene: THREE.Scene;
  lights: THREE.Object3D[];
}

/** 深色背景 + 雾效 + 柔和光照（三点光 + 半球光） */
export function buildScene(resTopY: number): SceneKit {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0a0e16');
  scene.fog = new THREE.Fog('#0a0e16', resTopY * 1.2, resTopY * 3.2);

  const hemi = new THREE.HemisphereLight(0xbcd4ff, 0x1b2233, 0.85);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xffffff, 1.5);
  key.position.set(60, 120, 80);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x7fb0ff, 0.75);
  rim.position.set(-80, 40, -70);
  scene.add(rim);

  const fill = new THREE.PointLight(0xffffff, 0.5, 0, 1.4);
  fill.position.set(0, resTopY * 0.55, 0);
  scene.add(fill);

  return { scene, lights: [hemi, key, rim, fill] };
}

/** 地面网格 + 中心轴线（提供空间参照） */
export function buildReference(topY: number) {
  const g = new THREE.Group();

  const axisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -2, 0),
    new THREE.Vector3(0, topY + 6, 0),
  ]);
  const axis = new THREE.Line(
    axisGeo,
    new THREE.LineBasicMaterial({ color: 0x3a4a66, transparent: true, opacity: 0.55 })
  );
  g.add(axis);

  const grid = new THREE.GridHelper(260, 26, 0x1e2a3d, 0x141c29);
  (grid.material as THREE.Material).transparent = true;
  (grid.material as THREE.Material).opacity = 0.55;
  grid.position.y = -2;
  g.add(grid);

  // 星点背景
  const starCount = 900;
  const pos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const r = 300 + Math.random() * 380;
    const t = Math.random() * Math.PI * 2;
    const p = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(p) * Math.cos(t);
    pos[i * 3 + 1] = r * Math.cos(p) * 0.6 + topY * 0.5;
    pos[i * 3 + 2] = r * Math.sin(p) * Math.sin(t);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(
    sg,
    new THREE.PointsMaterial({ color: 0x8fa6c8, size: 1.1, transparent: true, opacity: 0.55, sizeAttenuation: true })
  );
  g.add(stars);

  return g;
}

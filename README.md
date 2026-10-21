# 知识点之塔 · 3D 先修知识树

把 K12 教材知识点做成一座可以旋转、缩放、漫游的 **3D 知识之塔**。

> 产品形态参考开源项目 [secwind7/polytech-tree](https://github.com/secwind7/polytech-tree)（人类科技树 3D 可视化）的设计思路，**代码全部为本项目自行实现**，主题替换为「知识点先修关系」。

## 视觉通道 → 数据

| 通道 | 含义 |
|---|---|
| 高度（Y 轴） | 认知层次：启蒙层 → 基础层 → 进阶层 → 高阶层（**自下而上 = 从简单到复杂**） |
| 角度（扇区） | 学科轨道：同层内按该学科知识点数量占比分配扇区宽度，学科次序全局固定 |
| 多面体面数 | 重要度：5 → 20 面体、4 → 12 面、3 → 8 面、2 → 6 面（立方）、1 → 4 面体 |
| 节点尺寸 | 与重要度同向 |
| 层半径 | 由「层内节点面积需求」反推，使各扇区密度一致 |
| 连线 | 先修关系（前置 → 后继）：**简单节点是复杂节点的前置条件** |

## 快速开始

```bash
npm install
npm run dev        # 开发服务器
npm run validate   # 数据校验（失败返回非零退出码，可接入 CI）
npm run build      # tsc 类型检查 + 打包到 dist/（纯静态，无后端、无运行时请求）
npm run preview    # 本地预览构建产物
```

## 目录结构

```
data/
  techs.json        知识点节点（唯一事实源）
  eras.json         认知层次（时代层）
  categories.json   学科轨道（领域，含颜色）
src/
  main.ts           入口：装配场景、交互、渲染循环
  layout.ts         圆柱塔布局：层次分层 + 学科扇区 + 密度均衡 + 拥挤扩散
  polyhedra.ts      按重要度实例化多面体（InstancedMesh）
  edges.ts          先修连线（贝塞尔采样）+ 时代标记环
  labels.ts         HTML 标签层（按相机距离取最近 N 个）
  tour.ts           漫游排期、弹入曲线、视场自适应
  controls.ts       相机：旋转 / 缩放 / 平移 / 触摸
  scene.ts          渲染器、光照、雾、星点
scripts/
  validate.mjs      数据校验（CI 用）
  from_knowledge.py 从 knowledge.json 生成上述三份数据
```

## 数据模型

### techs.json

```json
{
  "id": "m9-05",
  "nameZh": "一元二次方程",
  "nameEn": "Quadratic Equation",
  "year": 9,
  "eraId": "L3",
  "categoryId": "math",
  "importance": 4,
  "prereqs": ["m8-03"],
  "descZh": "…（≤ 80 字）"
}
```

必填：`id / nameZh / year / eraId / categoryId / importance / descZh / prereqs`。
`eraId` 必须与 `year` 落在的 `eras.json` 半开区间 `[yearStart, yearEnd)` 一致，否则校验报错。

### eras.json

```json
{ "id": "L3", "nameZh": "进阶层", "yearStart": 7, "yearEnd": 10, "order": 3 }
```

### categories.json

```json
{ "id": "math", "nameZh": "数学", "color": "#4C8FE0", "order": 1 }
```

## 新增一个知识点

只改 JSON，不动视图代码：

1. 在 `data/techs.json` 末尾追加一条（`year` 落在目标层次的区间内）
2. `npm run validate` 确认通过
3. `npm run dev` 刷新即可看到新节点，布局与连线自动重排

## 交互

- **旋转**：左键拖拽 / 单指滑动
- **缩放**：滚轮 / 双指捏合
- **平移**：右键拖拽
- **悬停**：显示信息卡（中英文名、年级、学科、星级、简介），并高亮其先修链
- **点击**：固定详情卡，可点击前置/后续知识点跳转
- **图例滑块**：按到相机距离只显示最近 N 个节点名称，防止文字重叠
- **▶ 漫游**（约 78 秒）：相机沿中轴线自下而上，视线俯视当前层；知识点按年级逐个弹入（放大 2.5 倍 + 闪白后回落）；先修连线「生长式」爬向目标，抵达瞬间目标恰好显现；按 `Esc` 或点击画面退出

## 在线访问 & 仓库

| 平台 | 地址 |
|---|---|
| GitHub Pages（已上线） | https://yangliufeng-1.github.io/knowledge-tower-3d/ |
| 源码仓库 · GitHub | https://github.com/yangliufeng-1/knowledge-tower-3d |
| 源码仓库 · Gitee | https://gitee.com/yangliufeng1/knowledge-tower-3d |
| Workbuddy 托管 | https://knowledge-tower-3d.app.workbuddy.host/ |

### Gitee Pages 开启步骤（需手动一次）

Gitee 的 Pages 服务没有开放部署 API，需在网页端启动一次：

1. 打开 https://gitee.com/yangliufeng1/knowledge-tower-3d
2. 进入 **服务 → Gitee Pages**
3. 部署分支选 `gh-pages`，部署目录留空（根目录），勾选后点击「启动」
4. 启动后访问 https://yangliufeng1.gitee.io/knowledge-tower-3d/

> 未实名认证的账号无法使用 Gitee Pages；若无法启动，可直接用上面的 GitHub Pages 链接。
> 每次更新产物后，回到该页面点「更新」重新部署。

## 数据来源与许可

- 知识点数据（470 项、456 条先修关系）来自策展式教育索引，**定位为学习路径参考，而非权威教学大纲**
- 教材目录链接指向开源仓库 [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook)
- **代码**：MIT
- **数据**：CC BY 4.0

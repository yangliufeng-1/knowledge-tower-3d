#!/usr/bin/env python3
"""把 knowledge.json（知识点先修图谱 v2）转换为「知识点之塔」三份数据源：
  data/techs.json      <- nodes（科技 = 知识点）
  data/eras.json       <- levels（时代 = 认知层次）
  data/categories.json <- tracks（领域 = 学科轨道）

用法：python scripts/from_knowledge.py [源文件路径]
"""
import json, sys, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.home() / "Desktop" / "knowledge.json"
data = json.loads(SRC.read_text(encoding="utf-8"))

# ---- 面数（重要度 → 多面体） ----
FACE_BY_IMPORTANCE = {5: 20, 4: 12, 3: 8, 2: 7, 1: 4}
SHAPE_NAME = {5: "icosahedron", 4: "dodecahedron", 3: "octahedron", 2: "heptagonal_prism", 1: "tetrahedron"}


def track_index_base(tid: str) -> int:
    """同一学科内按学段顺序错开水平位置，避免 A 层节点压在 B 层的射线上。"""
    return 0


# ---------- categories.json ----------
# shape="auto" 表示：几何体由 importance 决定（面数编码重要度：20/12/8/6/4 面）；
# 若改为具体几何名（如 "icosahedron"），视图层会改为按领域统一几何。
cats = []
for i, t in enumerate(data["tracks"]):
    cats.append({
        "id": t["id"],
        "nameZh": t["name"],
        "nameEn": t.get("en", ""),
        "color": t["color"],
        "shape": "auto",
        "order": i,
    })
(ROOT / "data" / "categories.json").write_text(
    json.dumps(cats, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# ---------- eras.json ----------
eras = []
for i, lv in enumerate(sorted(data["levels"], key=lambda x: x["order"])):
    gs = [n["grade"] for n in data["nodes"] if n["levelId"] == lv["id"]]
    lo, hi = (min(gs), max(gs) + 1) if gs else (0, 1)
    eras.append({
        "id": lv["id"],
        "nameZh": lv["name"],
        "nameEn": lv.get("en", ""),
        "subtitle": lv.get("gradeRange", ""),
        "yearStart": lo,        # 借 year 通道表达「年级」（视图层视作连续时间轴）
        "yearEnd": hi,
        "order": lv["order"],
        "axisLabel": "年级",
    })
(ROOT / "data" / "eras.json").write_text(
    json.dumps(eras, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

# ---------- techs.json ----------
eras_sorted = sorted(eras, key=lambda e: e["order"])
def era_of(grade: int) -> str:
    for e in eras_sorted:
        if e["yearStart"] <= grade < e["yearEnd"]:
            return e["id"]
    return eras_sorted[-1]["id"]

techs = []
for n in data["nodes"]:
    imp = int(n["importance"])
    techs.append({
        "id": n["id"],
        "nameZh": n["name"],
        "nameEn": n.get("en", ""),
        "year": n["grade"],                       # 年级作为时间轴
        "eraId": n.get("levelId") or era_of(n["grade"]),
        "categoryId": n["trackId"],
        "importance": imp,
        "faces": FACE_BY_IMPORTANCE[imp],
        "shape": SHAPE_NAME[imp],
        "prereqs": n.get("prereqs", []),
        "descZh": n["desc"],
        "grade": n["grade"],
        "semester": n.get("semester"),
        "stage": n.get("stage", ""),
        "book": n.get("book", ""),
        "repoPath": n.get("repoPath", ""),
        # wikiEn：维基条目标题作为来源审计线索；知识点数据无对应条目，留空
        "wikiEn": "",
    })
(ROOT / "data" / "techs.json").write_text(
    json.dumps(techs, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

print(f"techs={len(techs)} eras={len(eras)} categories={len(cats)} "
      f"edges={sum(len(t['prereqs']) for t in techs)}")

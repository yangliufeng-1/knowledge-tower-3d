import type { LayoutResult } from './layout';

/**
 * 漫游排期：相机沿塔中轴线自下而上匀速上升，视线始终朝下俯视当前层；
 * 科技按 year 逐个显现；依赖连线「生长式」爬向目标，抵达瞬间目标显现。
 *
 * 关键不变量（遮挡不变量）：每帧采样点中不存在「已显现节点高于摄像机」，
 * 即正在显现的科技不会被上层遮挡。
 */
export interface TourState {
  active: boolean;
  time: number;
  /** 当前处于显现中的层 index */
  currentRing: number;
}

const LEAD = 26;         // 相机领先正在显现的圆盘多少单位
const ROLL_SPEED = 1.72; // 绕视轴滚转，度/秒

export class Tour {
  res: LayoutResult;
  state: TourState = { active: false, time: 0, currentRing: 0 };
  onEnd?: () => void;

  constructor(res: LayoutResult) {
    this.res = res;
  }

  get duration() {
    return this.res.tourDuration;
  }

  start() {
    this.state = { active: true, time: 0, currentRing: 0 };
  }

  stop() {
    this.state.active = false;
  }

  /**
   * 推进时间，返回相机位置与 roll 角（弧度）。
   */
  tick(dt: number) {
    if (!this.state.active) return null;
    this.state.time += dt;
    const t = this.state.time;

    // 找到当前时间所在的层
    let ringIdx = 0;
    for (let i = 0; i < this.res.rings.length; i++) {
      const r = this.res.rings[i];
      if (t >= r.clockStart) ringIdx = i;
    }
    this.state.currentRing = ringIdx;

    // 相机高度：在层与层之间平滑插值（按显现进度）
    const rings = this.res.rings;
    const cur = rings[ringIdx];
    const next = rings[ringIdx + 1];
    const localT = (t - cur.clockStart) / Math.max(0.001, cur.dwell);
    let y: number;
    if (next) {
      const ease = smoothstep(Math.min(1, Math.max(0, (localT - 0.7) / 0.3)));
      y = cur.y + (next.y - cur.y) * ease;
    } else {
      y = cur.y;
    }
    // 抬升到该层之上 LEAD，俯视当前面
    y += LEAD;

    const roll = (t * ROLL_SPEED * Math.PI) / 180;
    const topY = this.res.topY + LEAD + 4;

    if (t >= this.duration) {
      this.state.active = false;
      this.onEnd?.();
    }

    return {
      y: Math.min(y, topY),
      roll,
      progress: Math.min(1, t / this.duration),
      /** 当前层内显现进度 */
      layerProgress: Math.min(1, Math.max(0, localT)),
    };
  }

  /** 某个时刻是否应显现（节点 appearTime ≤ t） */
  visibleAt(appearTime: number) {
    return this.state.time >= appearTime;
  }
}

function smoothstep(x: number) {
  return x * x * (3 - 2 * x);
}

/** 相机 FOV：让当前层的圆盘刚好填满画面（随层半径自适） */
export function fovForDisc(radius: number, height: number) {
  const halfAngle = Math.atan((radius * 1.12) / height);
  return Math.min(112, Math.max(30, (halfAngle * 2 * 180) / Math.PI));
}

/** 弹入动画：前 0.18s 放大到 2.5 倍并闪白，0.5s 内回落 */
export function popScale(elapsed: number) {
  if (elapsed < 0) return 0;
  if (elapsed < 0.18) {
    const k = elapsed / 0.18;
    return 2.5 * (1 - k) + 1.55 * k;
  }
  if (elapsed < 0.5) {
    const k = (elapsed - 0.18) / 0.32;
    return 1.55 + (1 - 1.55) * easeOut(k);
  }
  return 1;
}

export function popFlash(elapsed: number) {
  if (elapsed < 0 || elapsed > 0.35) return 0;
  return Math.max(0, 1 - elapsed / 0.35) * 0.85;
}

function easeOut(x: number) {
  return 1 - (1 - x) ** 3;
}

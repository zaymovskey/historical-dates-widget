import { CSSProperties, useRef } from "react";
import styles from "./Circle.module.scss";
import { cn } from "@/shared/lib";
import { useIsMobile } from "@/shared/hooks";
import { ChangeIndexHandler, CircleActions } from "./CircleActions/CircleActions";
import { YearsCounter } from "../YearsCounter/YearsCounter";
import { useGSAP, gsap } from "@/shared/lib";
import { ANIMATION_DURATION } from "../../model/animations";

export interface CircleItem {
  id: number;
  label: string;
}

interface CircleProps {
  items: CircleItem[];
  activeIndex?: number;
  setActiveIndex?: ChangeIndexHandler;
  activeAngleDeg?: number;
  years?: {
    from: number;
    to: number;
  };
}

type CssVars = CSSProperties & {
  ["--angle"]?: string;
};

const getPositionsDelta = (from: number, to: number, total: number) => {
  let delta = to - from;

  if (delta > total / 2) {
    delta -= total;
  }
  if (delta < -total / 2) {
    delta += total;
  }

  if (Math.abs(delta) === total / 2) {
    delta = total / 2;
  }
  return delta;
};

const normalizeInRange = (a: number, total = 360) => {
  const m = a % total;
  return m < 0 ? m + total : m;
};

export function Circle({
  items,
  activeIndex = 4,
  activeAngleDeg = 30,
  years = { from: 2015, to: 2022 },
  setActiveIndex
}: CircleProps) {
  const stepDeg = 360 / items.length;

  const isMobile = useIsMobile();

  const wheelRef = useRef<HTMLDivElement | null>(null);

  const handleChangeIndex = (next: number) => {
    setActiveIndex?.(next);
  };

  const rotationRef = useRef({ v: stepDeg * activeIndex + activeAngleDeg });

  useGSAP(() => {
    const wheelEl = wheelRef.current;
    if (!wheelEl) return;

    const activeBadge = wheelEl.querySelector(
      `[data-idx="${activeIndex}"] [data-badge]`
    ) as HTMLElement | null;

    if (activeBadge) {
      gsap.set(activeBadge, { autoAlpha: 1 });
    }
  }, []);

  useGSAP(
    () => {
      const wheelEl = wheelRef.current;
      if (!wheelEl) return;
      const rawTarget = activeAngleDeg - stepDeg * activeIndex;

      const currentNorm = normalizeInRange(rotationRef.current.v, 360);
      const targetNorm = normalizeInRange(rawTarget, 360);

      const delta = getPositionsDelta(currentNorm, targetNorm, 360);
      const target = rotationRef.current.v + delta;

      gsap.killTweensOf(rotationRef.current);
      gsap.to(rotationRef.current, {
        v: target,
        duration: ANIMATION_DURATION,
        overwrite: true,
        onUpdate: () => {
          gsap.set(wheelEl, {
            rotate: rotationRef.current.v,
            "--wheel-rot": `${rotationRef.current.v}deg`
          });
        }
      });
    },
    { dependencies: [activeIndex, activeAngleDeg, stepDeg] }
  );

  const prevActiveRef = useRef(activeIndex);

  useGSAP(
    () => {
      const wheelEl = wheelRef.current;
      if (!wheelEl) return;

      const prevIdx = prevActiveRef.current;
      const nextIdx = activeIndex;

      const prevBadge = wheelEl.querySelector(
        `[data-idx="${prevIdx}"] [data-badge]`
      ) as HTMLElement | null;

      const nextBadge = wheelEl.querySelector(
        `[data-idx="${nextIdx}"] [data-badge]`
      ) as HTMLElement | null;

      if (!prevBadge || !nextBadge) {
        prevActiveRef.current = nextIdx;
        return;
      }

      if (prevIdx === nextIdx) return;

      gsap.killTweensOf([prevBadge, nextBadge]);

      const tl = gsap.timeline();
      tl.to(prevBadge, { autoAlpha: 0, duration: 0.3 }, 0);
      tl.fromTo(nextBadge, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0);

      prevActiveRef.current = nextIdx;
    },
    { dependencies: [activeIndex] }
  );

  return (
    <div className={styles.stage}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Исторические
          <br />
          даты
        </h2>
      </header>

      <YearsCounter from={years.from} to={years.to} activeIndex={activeIndex} />

      {!isMobile && (
        <div className={styles.circleWrapper}>
          <div className={styles.circle} ref={wheelRef}>
            {items.map((item, i) => {
              const angle = `${stepDeg * i}deg`;
              const isActive = i === activeIndex;

              const style: CssVars = { ["--angle"]: angle };

              return (
                <button
                  type="button"
                  data-idx={i}
                  key={item.id}
                  className={cn(styles.anchor, isActive && styles.isActive)}
                  style={style}
                  onClick={() => handleChangeIndex(i)}
                >
                  <div className={styles.dotWrapper}>
                    <div className={styles.animDot}>
                      <div className={styles.dot} aria-hidden="true" />
                    </div>
                  </div>

                  <div className={styles.animActiveDot}>
                    <div className={styles.activeDot} aria-hidden="true">
                      <span className={styles.activeIndex}>{i + 1}</span>
                    </div>
                  </div>

                  <div className={styles.labelUnrotate} aria-hidden="true" data-badge>
                    <div className={styles.labelOffset}>
                      <span className={styles.activeLabel}>{item.label}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <CircleActions
        activeIndex={activeIndex}
        itemsLength={items.length}
        className={styles.circleActions}
        onChangeIndex={handleChangeIndex}
      />
    </div>
  );
}

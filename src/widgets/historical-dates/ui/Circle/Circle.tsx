import { Dispatch } from "react";
import styles from "./Circle.module.scss";
import { cn } from "@/shared/lib";

export interface CircleItem {
  label: string;
}

interface CircleProps {
  items: CircleItem[];
  activeIndex?: number;
  setActiveIndex?: Dispatch<React.SetStateAction<number>>;
  activeAngleDeg?: number;
}

type CssVars = React.CSSProperties & {
  ["--angle"]?: string;
};

export function Circle({ items, activeIndex = 0, activeAngleDeg = 30 }: CircleProps) {
  const stepDeg = 360 / items.length;
  const offsetDeg = activeAngleDeg - stepDeg * activeIndex;

  return (
    <div className={styles.stage}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Исторические
          <br />
          даты
        </h2>
      </header>

      <div className={styles.years}>
        <span className={styles.yearFrom}>2015</span>
        <span className={styles.yearTo}>2022</span>
      </div>
      <div className={styles.circleWrapper}>
        <div className={styles.circle}>
          {items.map((_, i) => {
            const angle = `${offsetDeg + stepDeg * i}deg`;
            const isActive = i === activeIndex;

            const style: CssVars = { ["--angle"]: angle };

            return (
              <button
                type="button"
                key={i}
                className={cn(styles.anchor, isActive && styles.isActive)}
                style={style}
              >
                <div className={styles.animDot}>
                  <div className={styles.dot} aria-hidden="true" />
                </div>

                <div className={styles.animActiveDot}>
                  <div className={styles.activeDot} aria-hidden="true">
                    <span className={styles.activeIndex}>{i + 1}</span>
                  </div>
                </div>

                <div className={styles.labelUnrotate} aria-hidden="true">
                  <div className={styles.labelOffset}>
                    <span className={styles.activeLabel}>Наука</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

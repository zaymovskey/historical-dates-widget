import { CSSProperties, Dispatch, SetStateAction } from "react";
import styles from "./Circle.module.scss";
import { cn } from "@/shared/lib";
import { IconButton } from "@/shared/ui";
import { ArrowIcon } from "@/shared/ui";

export interface CircleItem {
  id: number;
  label: string;
}

interface CircleProps {
  items: CircleItem[];
  activeIndex?: number;
  setActiveIndex?: Dispatch<SetStateAction<number>>;
  activeAngleDeg?: number;
  years?: {
    from: number;
    to: number;
  };
}

type CssVars = CSSProperties & {
  ["--angle"]?: string;
};

export function Circle({
  items,
  activeIndex = 4,
  activeAngleDeg = 30,
  years = { from: 2015, to: 2022 }
}: CircleProps) {
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
        <span className={styles.yearFrom}>{years.from}</span>
        <span className={styles.yearTo}>{years.to}</span>
      </div>
      <div className={styles.circleWrapper}>
        <div className={styles.circle}>
          {items.map((item, i) => {
            const angle = `${offsetDeg + stepDeg * i}deg`;
            const isActive = i === activeIndex;

            const style: CssVars = { ["--angle"]: angle };

            return (
              <button
                type="button"
                key={item.id}
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
                    <span className={styles.activeLabel}>{item.label}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.itemIndex}>
          {"0" + (activeIndex + 1)}/{"0" + items.length}
        </div>
        <div className={styles.actionButtons}>
          <IconButton variant="outline">
            <ArrowIcon direction="left" />
          </IconButton>
          <IconButton variant="outline">
            <ArrowIcon direction="right" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

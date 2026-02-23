import { CSSProperties } from "react";
import styles from "./Circle.module.scss";
import { cn } from "@/shared/lib";
import { useIsMobile } from "@/shared/hooks";
import { ChangeIndexHandler, CircleActions } from "./CircleActions/CircleActions";
import { YearsCounter } from "../YearsCounter/YearsCounter";

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

export function Circle({
  items,
  activeIndex = 4,
  activeAngleDeg = 30,
  years = { from: 2015, to: 2022 },
  setActiveIndex
}: CircleProps) {
  const stepDeg = 360 / items.length;
  const offsetDeg = activeAngleDeg - stepDeg * activeIndex;

  const isMobile = useIsMobile();

  const handleChangeIndex = (next: number) => {
    setActiveIndex?.(next);
  };

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
                  onClick={() => handleChangeIndex(i)}
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

import styles from "./HistoricalDates.module.scss";

const POINTS = 6;
const STEP_DEG = 360 / POINTS;

const ACTIVE_INDEX = 1;
const ACTIVE_ANGLE_DEG = 30;

type CssVars = React.CSSProperties & {
  ["--angle"]?: string;
};

const points = Array.from({ length: POINTS });

export function HistoricalDates() {
  const offsetDeg = ACTIVE_ANGLE_DEG - STEP_DEG * ACTIVE_INDEX;

  return (
    <section className={styles.root}>
      <div className={styles.axes} aria-hidden="true" />

      <header className={styles.header}>
        <div className={styles.accent} />
        <h2 className={styles.title}>Исторические даты</h2>
      </header>

      <div className={styles.stage}>
        <div className={styles.years}>
          <span className={styles.yearFrom}>2015</span>
          <span className={styles.yearTo}>2022</span>
        </div>

        <div className={styles.circleWrapper}>
          <div className={styles.circle}>
            {points.map((_, i) => {
              const angle = `${offsetDeg + STEP_DEG * i}deg`;
              const isActive = i === ACTIVE_INDEX;

              const style: CssVars = { ["--angle"]: angle };

              return (
                <div key={i} className={styles.anchor} style={style}>
                  {isActive ? (
                    <>
                      <div className={styles.activeDot}>
                        <span className={styles.activeIndex}>{i + 1}</span>
                      </div>

                      <div className={styles.labelUnrotate}>
                        <div className={styles.labelOffset}>
                          <span className={styles.activeLabel}>Наука</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={styles.dot} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.events}>slider</div>
    </section>
  );
}

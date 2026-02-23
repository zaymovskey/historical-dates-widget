import { useRef } from "react";
import styles from "./YearsCounter.module.scss";
import { useGSAP, gsap } from "@/shared/lib";
type Years = { from: number; to: number };
import { ANIMATION_DURATION } from "../../model/animations";

interface YearsCounterProps extends Years {
  from: number;
  to: number;
  activeIndex?: number;
}

export function YearsCounter({ from, to, activeIndex }: YearsCounterProps) {
  const fromRef = useRef<HTMLSpanElement | null>(null);
  const toRef = useRef<HTMLSpanElement | null>(null);

  const prevRef = useRef<Years>({ from, to });

  useGSAP(
    () => {
      const fromEl = fromRef.current;
      const toEl = toRef.current;
      if (!fromEl || !toEl) return;

      const fromObj = { v: prevRef.current.from };
      const toObj = { v: prevRef.current.to };

      gsap.killTweensOf(fromObj);
      gsap.killTweensOf(toObj);

      gsap.to(fromObj, {
        v: from,
        duration: ANIMATION_DURATION,
        overwrite: true,
        onUpdate: () => {
          fromEl.textContent = String(Math.round(fromObj.v));
        }
      });

      gsap.to(toObj, {
        v: to,
        duration: ANIMATION_DURATION,
        overwrite: true,
        onUpdate: () => {
          toEl.textContent = String(Math.round(toObj.v));
        }
      });
      prevRef.current = { from, to };
    },
    { dependencies: [activeIndex] }
  );

  return (
    <div className={styles.root}>
      <span ref={fromRef} className={styles.yearFrom}>
        {from}
      </span>
      <span ref={toRef} className={styles.yearTo}>
        {to}
      </span>
    </div>
  );
}

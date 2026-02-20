import styles from "./HistoricalDates.module.scss";
import "swiper/css";
import { historicalPeriods } from "../model/data";
import { CircleItem, Circle } from "./Circle/Circle";
import { EventsSlider } from "./EventsSlider/EventsSlider";
import { useState } from "react";
import { cn } from "@/shared/lib";

export function HistoricalDates() {
  const circleItems: CircleItem[] = historicalPeriods.map((period) => ({
    id: period.id,
    label: period.label
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const activePeriod = historicalPeriods[activeIndex];

  return (
    <section className={styles.root}>
      <div className={styles.axes} aria-hidden="true" />

      <Circle
        items={circleItems}
        activeIndex={activeIndex}
        years={{ from: activePeriod.yearFrom, to: activePeriod.yearTo }}
      />

      <div className={cn(styles.events, "content-padding")}>
        <EventsSlider items={activePeriod.events} />
      </div>
    </section>
  );
}

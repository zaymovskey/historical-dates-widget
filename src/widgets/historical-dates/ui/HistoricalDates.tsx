import styles from "./HistoricalDates.module.scss";
import "swiper/css";
import { historicalPeriods } from "../model/data";
import { CircleItem, Circle } from "./Circle/Circle";
import { EventsSlider } from "./EventsSlider/EventsSlider";
import { useState } from "react";

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

      <Circle items={circleItems} />

      <div className={styles.events}>
        <EventsSlider items={activePeriod.events} />
      </div>
    </section>
  );
}

import styles from "./HistoricalDates.module.scss";
import "swiper/css";

import { CircleItem, Circle } from "./Circle/Circle";
import { EventsSlider } from "./EventsSlider/EventsSlider";
import { useState } from "react";
import { cn } from "@/shared/lib";
import { CircleActions } from "./Circle/CircleActions/CircleActions";
import { type HistoricalPeriod } from "../model/types";

interface HistoricalDatesProps {
  historicalPeriods: HistoricalPeriod[];
}

export function HistoricalDates({ historicalPeriods }: HistoricalDatesProps) {
  const circleItems: CircleItem[] = historicalPeriods.map((period) => ({
    id: period.id,
    label: period.label
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const activePeriod = historicalPeriods[activeIndex];

  const handleChangeIndex = (next: number) => {
    setActiveIndex(next);
  };

  return (
    <section className={styles.root}>
      <div className={styles.axes} aria-hidden="true" />

      <Circle
        items={circleItems}
        activeIndex={activeIndex}
        years={{ from: activePeriod.yearFrom, to: activePeriod.yearTo }}
        setActiveIndex={handleChangeIndex}
      />

      <div className={cn(styles.events)}>
        <EventsSlider items={activePeriod.events} periodLabel={activePeriod.label} />
      </div>

      <CircleActions
        activeIndex={activeIndex}
        itemsLength={circleItems.length}
        className={styles.circleActions}
        onChangeIndex={handleChangeIndex}
      />
    </section>
  );
}

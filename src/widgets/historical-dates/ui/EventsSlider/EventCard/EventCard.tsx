import styles from "./EventCard.module.scss";
import { HistoricalPeriodEvent } from "../../../model/types";

interface EventsCardProps {
  event: HistoricalPeriodEvent;
}

export function EventsCard({ event }: EventsCardProps) {
  return (
    <div className={styles.root}>
      <h1 className={styles.year}>{event.year}</h1>
      <p className={styles.description}>{event.description}</p>
    </div>
  );
}

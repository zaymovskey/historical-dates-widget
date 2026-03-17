import { HistoricalDates } from "@/widgets/historical-dates";
import styles from "./App.module.scss";
import { historicalPeriods } from "@/widgets/historical-dates/model/data";

export function App() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <HistoricalDates historicalPeriods={historicalPeriods} />
      </div>
    </main>
  );
}

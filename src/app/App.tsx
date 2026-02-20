import { HistoricalDates } from "@/widgets/historical-dates";
import styles from "./App.module.scss";

export function App() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <HistoricalDates />
      </div>
    </main>
  );
}

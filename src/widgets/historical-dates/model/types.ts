export interface HistoricalPeriodEvent {
  year: number;
  description: string;
}

export interface HistoricalPeriod {
  label: string;
  yearFrom: number;
  yearTo: number;
  events: HistoricalPeriodEvent[];
}

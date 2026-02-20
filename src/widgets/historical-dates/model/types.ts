export interface HistoricalPeriodEvent {
  id: number;
  year: number;
  description: string;
}

export interface HistoricalPeriod {
  id: number;
  label: string;
  yearFrom: number;
  yearTo: number;
  events: HistoricalPeriodEvent[];
}

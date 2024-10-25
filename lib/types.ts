export interface Transaction {
  id: string;
  type: 'fund' | 'expense';
  amount: number;
  description: string;
  date: string;
  category: string;
}

export interface Settings {
  currency: string;
  timezone: string;
}

export interface AppState {
  transactions: Transaction[];
  settings: Settings;
}
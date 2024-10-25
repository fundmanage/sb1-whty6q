import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Transaction {
  id: string;
  type: 'fund' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: string;
}

interface FundStore {
  transactions: Transaction[];
  currency: string;
  timezone: string;
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
  setCurrency: (currency: string) => void;
  setTimezone: (timezone: string) => void;
}

export const useStore = create<FundStore>()(
  persist(
    (set) => ({
      transactions: [],
      currency: 'USD',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [
            ...state.transactions,
            { ...transaction, id: crypto.randomUUID() },
          ],
        })),
      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),
      setCurrency: (currency) => set({ currency }),
      setTimezone: (timezone) => set({ timezone }),
    }),
    {
      name: 'fund-store',
    }
  )
);
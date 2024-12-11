import { create } from 'zustand';

interface AppState {
  exampleValue: number;
  setExampleValue: (value: number) => void;
}

export const useStore = create<AppState>((set) => ({
  exampleValue: 0,
  setExampleValue: (value) => set({ exampleValue: value }),
}));

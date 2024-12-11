import { create } from 'zustand';

interface HeaderState {
  isScrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  isScrolled: false,
  setScrolled: (scrolled: boolean) => set({ isScrolled: scrolled }),
}));

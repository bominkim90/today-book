// src/store/searchStore.ts
import { create } from 'zustand';

type SearchStore = {
  recentSearches: string[];
  setRecentSearches: (list: string[]) => void;
  addSearchKeyword: (keyword: string) => void;
  loadFromStorage: () => void;
  clearAllStorage: () => void;
  removeOneStorage: (value: string) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  recentSearches: [],
  setRecentSearches: (list) => {
    localStorage.setItem('searchBookRecords', JSON.stringify(list));
    set({ recentSearches: list });
  },
  addSearchKeyword: (keyword) =>
    set((state) => {
      const filtered = state.recentSearches.filter((item) => item !== keyword);
      const newList = [keyword, ...filtered].slice(0, 10);
      localStorage.setItem('searchBookRecords', JSON.stringify(newList));
      return { recentSearches: newList };
    }),
  loadFromStorage: () => {
    const stored = JSON.parse(localStorage.getItem('searchBookRecords') || '[]');
    set({ recentSearches: stored });
  },
  clearAllStorage: () => {
    set({ recentSearches: [] });
  },
  removeOneStorage: (value) => {
    set((state) => {
      const prev = state.recentSearches;
      const removed = prev.filter((item) => item !== value);
      return { recentSearches: removed };
    });
  },
}));

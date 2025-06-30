import { create } from 'zustand';
import type { Book } from '../models/book.model';

type ResultSearchStore = {
  searchResults: Book[];
  isLoading: boolean;
  searchQuery: string;
  setSearchResults: (results: Book[]) => void;
  setLoading: (loading: boolean) => void;
  setSearchQuery: (query: string) => void;
  clearResults: () => void;
}

export const useResultSearchStore = create<ResultSearchStore>((set) => ({
  searchResults: [],
  isLoading: false,
  searchQuery: '',
  setSearchResults: (results) => {
    set({ searchResults: results });
  },
  setLoading: (loading) => {
    set({ isLoading: loading });
  },
  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },
  clearResults: () => {
    set({ searchResults: [], searchQuery: '' });
  }
}));
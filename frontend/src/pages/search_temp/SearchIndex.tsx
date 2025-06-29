import { useEffect } from 'react';
import { useSearchStore } from '../../store/searchStore';
import HeaderIndex from './header/HeaderIndex';
import MainIndex from './main/MainIndex';

export default function SearchIndex() {
  const loadFromStorage = useSearchStore((state) => state.loadFromStorage);

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <HeaderIndex />
      <MainIndex />
    </>
  );
}

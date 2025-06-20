import { useEffect, useState } from 'react';
import { getBookList } from '../api/books';

interface TBookData {
  isbn13: number;
  img: string;
  title: string;
  author: string;
  publisher: string;
  description: string;
}

export default function useBookList(type: string, page: number, limit: number) {
  const [bookData, setBookData] = useState<TBookData[] | null>(null);;
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getBookList(type, page, limit)
      .then((result) => setBookData(result))
      .catch((error) => setError(error));
  }, [type, page, limit]);

  return { bookData, error };
}

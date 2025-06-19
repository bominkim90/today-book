import { useEffect, useState } from 'react';
import { getBookList } from '../api/books';

export default function useBookList(type: string, page: number, limit: number) {
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBookList(type, page, limit)
      .then((result) => setBookData(result))
      .catch((error) => setError(error));
  }, [type, page, limit]);

  return { bookData, error };
}

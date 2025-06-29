import { useEffect, useState } from 'react';
import { getBookDetail } from '../api/books';
import type {Book} from '../models/book.model';

export default function useBookDetail(isbn13: number) {
  const [bookData, setBookData] = useState<Book | null>(null);;
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getBookDetail(isbn13)
      .then((result) => {
        setBookData(result[0])
      })
      .catch((error) => setError(error));
  }, []);

  return { bookData, error };
}

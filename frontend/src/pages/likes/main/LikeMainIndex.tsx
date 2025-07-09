import Loading from '../../../components/Loading';
import { useGetLikes } from '../../../hooks/useLikes';
import Main from '../../../layout/Main';
import BookLiked from './BookLiked';
import type { Book } from '../../../models/book.model';

interface Like {
  book: Book;
  bookIsbn13: string;
  id: number;
  userId: string;
}

export default function LikeMainIndex() {
  const { data: likes, isLoading, isError } = useGetLikes();
  console.log('likes: ', likes);
  if (isError) return <Main>찜 목록을 불러오는 중 오류가 발생했습니다.</Main>;
  if (isLoading) return <Loading />;
  if (likes.length === 0) return <Main>찜 목록이 비어있습니다.</Main>;

  return (
    <div className="grid grid-cols-2 gap-sm">
      {likes.map((like: Like) => (
        <BookLiked key={like.book.isbn13} bookData={like.book} />
      ))}
    </div>
  );
}

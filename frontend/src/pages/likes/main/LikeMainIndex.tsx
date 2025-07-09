import Loading from '../../../components/Loading';
import { useGetLikes } from '../../../hooks/useLikes';
import Main from '../../../layout/Main';
import type { Book } from '../../../models/book.model';
import BookLiked from './BookLiked';

export default function LikeMainIndex() {
  const { data: likes, isLoading, isError } = useGetLikes();

  if (isError) return <div className="layout-main">찜 목록을 불러오는 중 오류가 발생했습니다.</div>;
  if (isLoading) return <Loading />;
  if (likes.length === 0) return <Main>찜 목록이 비어있습니다.</Main>;

  return (
    <div className="grid grid-cols-2 gap-sm">
      {likes.map((book: Book) => (
        <BookLiked key={book.isbn13} bookData={book} />
      ))}
    </div>
  );
}

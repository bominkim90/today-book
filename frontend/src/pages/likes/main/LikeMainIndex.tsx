import Loading from '../../../components/Loading';
import { useGetLikes } from '../../../hooks/useLikes';
import type { Book } from '../../../models/book.model';
import BookLiked from './BookLiked';

export default function LikeMainIndex() {
  const { data: likes, isLoading, isError } = useGetLikes();

  if (isError) return <div className="layout-main">찜 목록을 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <div className="layout-main">
      {isLoading ? (
        <Loading />
      ) : !likes || likes.length === 0 ? (
        <div>찜 목록이 비어있습니다.</div>
      ) : (
        <div className="grid grid-cols-2 gap-sm">
          {likes.map((book: Book) => (
            <BookLiked key={book.isbn13} bookData={book} />
          ))}
        </div>
      )}
    </div>
  );
}

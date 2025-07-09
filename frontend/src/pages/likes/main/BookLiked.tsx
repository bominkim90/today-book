import { useNavigate } from 'react-router-dom';
import type { Book } from '../../../models/book.model';
import ButtonLike from './ButtonLike';
import { useGetLikes } from '../../../hooks/useLikes';
import Loading from '../../../components/Loading';

export default function BookLiked({ bookData }: { bookData: Book }) {
  const isbn13 = Number(bookData.isbn13);
  const navigate = useNavigate();

  function goDetail() {
    navigate(`/book/${isbn13}`);
  }

  const { data: books, isLoading, isError } = useGetLikes();

  if (isError) return <div className="layout-main">찜 목록을 불러오는 중 오류가 발생했습니다.</div>;
  if (isLoading) return <Loading />;

  return (
    <>
      {books.map((book: Book) => (
        <div
          key={book.isbn13}
          className="relative shadow-sm bg-white rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            goDetail();
          }}
        >
          <ButtonLike isbn13={isbn13} />
          <div className="book-container">
            <img className="book-cover" src={book.cover} alt={book.title} />
          </div>
          <div className="p-sm">
            <p className="book-title">{book.title}</p>
            <p className="book-author">{book.author}</p>
          </div>
        </div>
      ))}
    </>
  );
}

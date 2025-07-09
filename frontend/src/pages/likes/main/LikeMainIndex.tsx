import Loading from '../../../components/Loading';
import { useGetLikes } from '../../../hooks/useLikes';
import BookLiked from './BookLiked';
import type { Book } from '../../../models/book.model';
import useUserQuery from '../../../hooks/useUserQuery';
import LoginRequiredModal from '../../../components/modals/LoginRequireModal';
import { useEffect, useState } from 'react';

interface Like {
  book: Book;
  bookIsbn13: string;
  id: number;
  userId: string;
}

export default function LikeMainIndex() {
  const { isError: userError } = useUserQuery();
  const [showLoginModal, setShowLoginModal] = useState(false);

  // if (userError) setShowLoginModal(true); // 컴포넌트를 불러오면서 실행 => 렌더링 중 state를 변경 => 재렌더링 => state변경 ==> 무한 루프 error
  // useEffect는 컴포넌트가 "화면에 렌더링된 후" 실행되는 비동기적인 사이드 이펙트 함수.
  useEffect(() => {
    if (userError) setShowLoginModal(true);
  }, [userError]);

  const { data: likes, isLoading, isError } = useGetLikes();
  console.log('likes: ', likes);
  if (isError) return <div>찜 목록을 불러오는 중 오류가 발생했습니다.</div>;
  if (isLoading) return <Loading />;
  if (likes.length === 0) return <div>찜 목록이 비어있습니다.</div>;

  return (
    <>
      {showLoginModal ? (
        <LoginRequiredModal
          onCancel={() => {
            setShowLoginModal(false);
          }}
        />
      ) : (
        <div className="grid grid-cols-2 gap-sm">
          {likes.map((like: Like) => (
            <BookLiked key={like.book.isbn13} bookData={like.book} />
          ))}
        </div>
      )}
    </>
  );
}

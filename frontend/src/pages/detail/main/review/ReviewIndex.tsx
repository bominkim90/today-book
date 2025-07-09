import { useNavigate, useParams } from 'react-router-dom';
import { useGetReview } from '../../../../hooks/useReviews';
import ReviewList from './ReviewList';
import ReviewWrite from './ReviewWrite';
import useUserQuery from '../../../../hooks/useUserQuery';
import { useState } from 'react';
import LoginRequiredModal from '../../../../components/modals/LoginRequireModal';

export default function ReviewIndex() {
  const { isbn13 } = useParams();
  const { data: reviews = [] } = useGetReview(Number(isbn13));
  const [showReviewSection, setShowReviewSection] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  function checkLogin() {
    const { isError: userError } = useUserQuery();
    if (userError) {
      setShowLoginModal(true);
    } else {
      setShowReviewSection(false);
    }
  }

  return (
    <div className="mt-[48px]">
      {showReviewSection ? (
        <button onClick={checkLogin}>리뷰 작성 및 리뷰 보기</button>
      ) : (
        <>
          <div className="flex justify-between items-center mb-[16px]">
            <h3 className="text-[18px]">리뷰</h3>
            <p className="text- text-textGray">
              총 <span>{reviews.length}</span>개
            </p>
          </div>
          {/* 리뷰 작성 */}
          <ReviewWrite />
          {/* 리뷰 목록 */}
          <ReviewList />
        </>
      )}
      {showLoginModal && (
        <LoginRequiredModal
          onCancel={() => {
            navigate('/login');
          }}
        />
      )}
    </div>
  );
}

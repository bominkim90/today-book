import { useState } from 'react';
import { useGetReview } from '../../../../hooks/useReviews';
import type { Review } from '../../../../models/review.model';
import { useParams } from 'react-router-dom';

export default function ReviewList() {
  const { isbn13 } = useParams();
  console.log(isbn13);
  const { data: reviews = [], isLoading, isError } = useGetReview(Number(isbn13));
  const [showAll, setShowAll] = useState(false);

  if (isLoading) return <p>리뷰 불러오는 중...</p>;
  if (isError) return <p>리뷰 불러오는 중 오류가 발생했습니다.</p>;

  // 보여줄 리뷰 수 결정
  const displayedReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div className="mt-[48px]">
      {displayedReviews.map((review: Review) => (
        <div
          key={review.id}
          className="space-y-4 p-[16px] mb-[24px] shadow-[inset_0_-1px_2px_-1px_rgba(0,0,0,0.1)]"
        >
          <div className="flex items-center mb-[8px]">
            <img
              className="w-[40px] h-[40px] rounded-full mr-[8px]"
              src={review.image}
              alt={`${review.name}의 프로필`}
            />
            <p className="text-[14px] text-mainBlack">{review.name}</p>
          </div>
          <p className="text-[14px] mb-[8px]">{review.content}</p>
          <p className="mt-2 text-textGray text-xs">작성일: {review.date}</p>
        </div>
      ))}

      {!showAll && reviews.length > 2 && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full h-[38px] rounded-lg border-[1px] border-[#E5E7EB]"
        >
          전체 리뷰 보기
        </button>
      )}
    </div>
  );
}

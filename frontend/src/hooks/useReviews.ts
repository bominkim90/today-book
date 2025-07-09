// hooks/useReviews.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getReview, postReview, putReview, deleteReview } from '../api/reviews';

// 리뷰 조회
export const useGetReview = (isbn13: number) => {
  return useQuery({
    queryKey: ['reviews', isbn13],
    queryFn: () => getReview(isbn13),
    staleTime: 1000 * 60,
  });
};

// 리뷰 작성
export const usePostReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ isbn13, text }: { isbn13: number; text: string }) => postReview(isbn13, text),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['reviews', variables.isbn13] });
    },
  });
};

// 리뷰 수정
export const usePutReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ isbn13, text }: { isbn13: number; text: string }) => putReview(isbn13, text),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['reviews', variables.isbn13] });
    },
  });
};

// 리뷰 삭제
export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (isbn13: number) => deleteReview(isbn13),
    onSuccess: (_data, isbn13) => {
      queryClient.invalidateQueries({ queryKey: ['reviews', isbn13] });
    },
  });
};

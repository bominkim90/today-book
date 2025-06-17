import { useParams } from 'react-router-dom';

export default function DetailIndex() {
  const { bookId } = useParams<{ bookId: string }>();

  // bookId로 axios 요청 보냄
  // 그 요청의 데이터를 화면에 뿌리기.

  return (
    <div>
      {bookId}
      <p>책 디테일 페이지</p>
    </div>
  );
}

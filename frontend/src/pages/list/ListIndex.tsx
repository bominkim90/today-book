import { useParams } from 'react-router-dom';

export default function ListIndex() {
  const { subject } = useParams<{ subject: string }>();

  return <div>{subject} 책 리스트 페이지</div>;
}

import { useNavigate } from 'react-router-dom';

export default function BackButton(isbn13: number) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/detail/${isbn13}`);
      }}
      className="aspect-[1.5208/1] rounded-[24px] overflow-hidden relative"
    ></div>
  );
}

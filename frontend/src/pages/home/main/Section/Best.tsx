import { useNavigate } from 'react-router-dom';
import useBookList from '../../../../hooks/useBookList';


interface SectionListProps {
  LIMIT: number;
}

export default function SectionList({ LIMIT }: SectionListProps) {
  const navigate = useNavigate();
  const {bookData, error} = useBookList('best', 1, LIMIT);
  if (error) return <p>에러!</p>;
  if (!bookData) return <p>로딩 중...</p>;

  return (
    <div>
      {bookData.slice(0, LIMIT).map((value, index) => {
        return (
          <div
            onClick={() => {
              navigate(`/detail/${value.isbn13}`);
            }}
            key={index}
            className={`${index !== 0 ? 'mt-[16px]' : ''} aspect-[3.298/1]`}
          >
            <div className="p-[12px] flex items-center gap-[12px] bg-[#F9FAFB]">
              <div
                className={`${index === 0 ? 'bg-mainBlue' : 'bg-[#9CA3AF]'} text-white w-[32px] h-[32px] flex justify-center items-center rounded-full`}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="book-title">{value.title}</p>
                <p className="book-sub">
                  {value.author} | {value.publisher}
                </p>
              </div>
              <img src={value.cover} alt={value.title} className="book-cover" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

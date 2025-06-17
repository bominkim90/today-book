import { useNavigate } from 'react-router-dom';

interface TBookData {
  id: number;
  img: string;
  title: string;
  author: string;
  publisher: string;
  description: string;
}

interface SectionListProps {
  bookData: TBookData[];
  LIMIT: number;
}

export default function SectionList({ bookData, LIMIT }: SectionListProps) {
  const navigate = useNavigate();

  return (
    <div>
      {bookData.slice(0, LIMIT).map((value: TBookData, index: number) => {
        return (
          <div
            onClick={() => {
              navigate(`/detail/${value.id}`);
            }}
            key={index}
            className={`${index !== 0 ? 'mt-[16px]' : ''} aspect-[3.298/1] p-[12px] flex items-center gap-[12px] bg-[#F9FAFB]`}
          >
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
            <img src={value.img} alt={value.title} className="book-cover" />
          </div>
        );
      })}
    </div>
  );
}

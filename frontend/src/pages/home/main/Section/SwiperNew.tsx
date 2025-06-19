import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
// import useBookList from '../../../../hooks/useBookList';

interface TBookData {
  isbn13: number;
  img: string;
  title: string;
  author: string;
  publisher: string;
  description: string;
}

interface SectionSwiperProps {
  LIMIT: number;
  bookData: TBookData[];
  swiperLeng: number | undefined;
}

export default function SectionSwiper({ LIMIT, bookData, swiperLeng }: SectionSwiperProps) {
  const navigate = useNavigate();
  // const {bookData, error} = useBookList('today', 1, LIMIT);
  // if (error) return <p>에러!</p>;
  // if (!bookData) return <p>로딩 중...</p>;

  return (
    <Swiper spaceBetween={12} slidesPerView={swiperLeng}>
      {bookData.slice(0, LIMIT).map((value: TBookData, index: number) => {
        return (
          <SwiperSlide
            onClick={() => {
              navigate(`/detail/${value.isbn13}`);
            }}
            key={index}
          >
            <img
              src={value.img}
              alt={value.title}
              className="block w-full aspect-[0.75/1] rounded-[12px]"
            />
            <div className="mt-[8px]">
              <p className="book-title" style={{ fontSize: '12px' }}>
                {value.title}
              </p>
              <p className="book-sub">{value.author}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import useBookList from '../../../../hooks/useBookList';

interface SectionSwiperProps {
  LIMIT: number;
  swiperLeng: number | undefined;
}

export default function SectionSwiper({ LIMIT, swiperLeng }: SectionSwiperProps) {
  const navigate = useNavigate();

  const {bookData, error} = useBookList('today', 1, LIMIT);
  if (error) return <p>에러!</p>;
  if (!bookData) return <p>로딩 중...</p>;

  return (
    <Swiper spaceBetween={12} slidesPerView={swiperLeng}>
      {bookData.slice(0, LIMIT).map((value, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              onClick={() => {
                navigate(`/detail/${value.isbn13}`);
              }}
              className="aspect-[1.5208/1] rounded-[24px] overflow-hidden relative"
            >
              <img src={value.cover} alt={value.title} className="block w-full h-full" />
              <div className="p-[16px] absolute w-full bottom-[0px] left-[0px] bg-gradient-to-t from-black/70 to-black/0">
                <p className="book-title text-white">{value.title}</p>
                <p className="book-sub text-white">
                  {value.author} 저 | {value.publisher}
                </p>
              </div>
            </div>
            <p className="mt-[12px]">{value.description}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
// import { getBookList } from '../../api/books';
// import { useEffect } from 'react';

interface TBookData {
  id: number;
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
  // 추후 API 연결 시 사용
  // let bookData: TBookData;
  // useEffect(() => {
  //   getBookList()
  //     .then((result) => {
  //       bookData = result;
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <Swiper spaceBetween={12} slidesPerView={swiperLeng}>
      {bookData.slice(0, LIMIT).map((value: TBookData, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div
              onClick={() => {
                navigate(`/detail/${value.id}`);
              }}
              className="aspect-[1.5208/1] rounded-[24px] overflow-hidden relative"
            >
              <img src={value.img} alt={value.title} className="block w-full h-full" />
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

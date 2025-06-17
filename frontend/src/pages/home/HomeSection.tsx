// import axios from 'axios';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionList from './SectionList';
import SectionSwiperToday from './SectionSwiperToday';
import SectionSwiperNew from './SectionSwiperNew';

interface propsHomeSection {
  listType: number;
  title: string;
  moreBtnFlag: boolean;
  swiperLeng?: number;
  LIMIT: number;
}

export default function HomeSection(props: propsHomeSection) {
  const { listType, title, moreBtnFlag, swiperLeng, LIMIT } = props;
  const navigate = useNavigate();

  // 섹션 주제별로 데이터가 달라짐
  const dummy = [
    {
      id: 1,
      img: '/imgs/book-cover.png',
      title: '시간의 정원',
      author: '김하연',
      publisher: '푸른나무',
      description: '일상에서 벗어나 자신만의 정원을 가꾸는 방법에 대한 에세이.',
    },
    {
      id: 2,
      img: '/imgs/book-cover.png',
      title: '파도',
      author: '김보민2',
      publisher: '출판사',
      description: '파도에서 벗어나 자신만의 정원을 가꾸는 방법에 대한 에세이.',
    },
    {
      id: 3,
      img: '/imgs/book-cover.png',
      title: '코딩이란',
      author: '김보민3',
      publisher: '출판사',
      description: '코딩에서 벗어나 자신만의 정원을 가꾸는 방법에 대한 에세이.',
    },
    {
      id: 4,
      img: '/imgs/book-cover.png',
      title: '코딩이란',
      author: '김보민3',
      publisher: '출판사',
      description: '코딩에서 벗어나 자신만의 정원을 가꾸는 방법에 대한 에세이.',
    },
    {
      id: 5,
      img: '/imgs/book-cover.png',
      title: '코딩이란',
      author: '김보민3',
      publisher: '출판사',
      description: '코딩에서 벗어나 자신만의 정원을 가꾸는 방법에 대한 에세이.',
    },
  ];

  // useEffect(()=>{
  //   axios.get('/api/books?type={type}(&:id)&page={ }&limit={ }')
  // }, [])

  let SectionComponent;
  switch (listType) {
    case 1:
      SectionComponent = (
        <SectionSwiperToday bookData={dummy} LIMIT={LIMIT} swiperLeng={swiperLeng} />
      );
      break;
    case 2:
      SectionComponent = (
        <SectionSwiperNew bookData={dummy} LIMIT={LIMIT} swiperLeng={swiperLeng} />
      );
      break;
    case 3:
      SectionComponent = <SectionList bookData={dummy} LIMIT={LIMIT} />;
      break;
    default:
      SectionComponent = <SectionList bookData={dummy} LIMIT={LIMIT} />;
      break;
  }

  return (
    <section>
      <div className="pt-[32px] pb-[16px] flex justify-between items-center">
        <h2 className="section-title">{title}</h2>
        {moreBtnFlag && (
          <button
            onClick={() => {
              navigate(`/list/${title}`);
            }}
            className="text-mainBlue"
            type="button"
          >
            더보기 &#62;
          </button>
        )}
      </div>

      {SectionComponent}
    </section>
  );
}

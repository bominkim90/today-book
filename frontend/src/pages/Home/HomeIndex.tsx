import HomeSection from './HomeSection';

export default function HomeIndex() {
  return (
    <div className="p-[16px]">
      <HomeSection
        listType={1}
        title={'오늘의 도서'}
        swiperLeng={1.2}
        moreBtnFlag={false}
        LIMIT={10}
      />

      <HomeSection
        listType={2}
        title={'신간 도서'}
        swiperLeng={3.3}
        moreBtnFlag={true}
        LIMIT={10}
      />

      <HomeSection listType={3} title={'베스트셀러'} moreBtnFlag={true} LIMIT={3} />
      {/* <HomeSection title={'베스트 셀러'} swiperFlag={false} moreBtnFlag={true} LIMIT={3} /> */}
    </div>
  );
}

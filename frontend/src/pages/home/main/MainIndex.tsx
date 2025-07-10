import Main from '../../../layout/Main';
import SectionIndex from './Section/SectionIndex';

export default function MainIndex() {
  return (
    <Main>
      <SectionIndex
        listType={1}
        title={'today'}
        subTitle={'평점, 판매량, 최신성, 랜덤 요소를 반영하여 추천을 제공합니다.'}
        swiperLeng={1.8}
        moreBtnFlag={false}
        LIMIT={10}
      />

      <SectionIndex listType={2} title={'new'} swiperLeng={3.3} moreBtnFlag={true} LIMIT={10} />

      <SectionIndex listType={3} title={'best'} moreBtnFlag={true} LIMIT={3} />
    </Main>
  );
}

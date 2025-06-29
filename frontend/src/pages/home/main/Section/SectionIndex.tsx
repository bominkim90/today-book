// import axios from 'axios';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionList from './Best';
import SectionSwiperToday from './SwiperToday';
import SectionSwiperNew from './SwiperNew';

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

  let SectionComponent;
  switch (listType) {
    case 1:
      SectionComponent = (
        <SectionSwiperToday LIMIT={LIMIT} swiperLeng={swiperLeng} />
      );
      break;
    case 2:
      SectionComponent = (
        <SectionSwiperNew LIMIT={LIMIT} swiperLeng={swiperLeng} />
      );
      break;
    case 3:
      SectionComponent = <SectionList LIMIT={LIMIT} />;
      break;
    default:
      SectionComponent = <SectionList LIMIT={LIMIT} />;
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
            type="button"
            className="text-mainBlue pr-[18px]"
            style={{
              background:
                "url('/icons/button/arrow_blue.svg') right calc(50% + 1px)/20px 20px no-repeat",
            }}
          >
            더보기
          </button>
        )}
      </div>

      {SectionComponent}
    </section>
  );
}

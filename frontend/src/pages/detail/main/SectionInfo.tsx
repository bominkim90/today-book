import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetail } from '../../../api/books';

export default function SectionInfo() {
  const { isbn13 } = useParams<string>();
  console.log(isbn13);
  // const [bookData, setBookData] = useState();
  // useEffect(() => {
  //   getBookDetail(Number(isbn13))
  //     .then((result) => setBookData(result))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    // <div>
    //   <div className="p-[16px] flex flex-col justify-center">
    //     <img className="block w-[192px] h-[256px] rounded-[16px] mb-[24px]" src={bookData.cover} />
    //     <h2 className="text-[20px] font-bold mb-[8px]">{bookData.title}</h2>
    //     <p className="text-[14px]">{bookData.author} 저</p>
    //   </div>
    //   <div className="pt-[24px]">
    //     <h3 className="text-[18px] mb-[14px]">줄거리</h3>
    //     <p className="text-[14px]">{bookData.description}</p>
    //   </div>
    // </div>
    <div>
      <div className="p-[16px] flex flex-col items-center">
        <div className="bg-red-100 block w-[192px] h-[256px] rounded-[16px] mb-[24px]" />
        <h2 className="text-[20px] font-bold mb-[12px]">{isbn13} 책 타이틀</h2>
        <p className="text-[14px]">저자</p>
      </div>
      <div className="pt-[26px]">
        <h3 className="text-[18px] mb-[20px]">줄거리</h3>
        <p className="text-[14px]">이것은 책의 줄거리 입니다.</p>
      </div>
    </div>
  );
}

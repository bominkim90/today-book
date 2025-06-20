import { useParams } from 'react-router-dom';
import useBookDetail from '../../../hooks/useBookDetail';


export default function SectionInfo() {
  const { isbn13 } = useParams<string>();

  const {bookData, error} = useBookDetail(Number(isbn13));
  if (error) return <p>에러!</p>
  if (!bookData) return <p>로딩 중...</p>;

  return (
    <div>
      <div className="p-[16px] flex flex-col items-center justify-center">
        <img className="block w-[192px] h-[256px] rounded-[16px] mb-[24px]" src={bookData.cover} />
        <h2 className="text-[20px] font-bold mb-[8px]">{bookData.title}</h2>
        <p className="text-[14px]">{bookData.author} 저</p>
      </div>
      <div className="pt-[24px]">
        <h3 className="text-[18px] mb-[14px]">줄거리</h3>
        <p className="text-[14px]">{bookData.description}</p>
      </div>
    </div>
  );
}

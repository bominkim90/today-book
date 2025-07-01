import { useParams } from 'react-router-dom';
import HeaderIndex from './header/HeaderIndex';
import BookList from './main/BookListIndex';


export default function ListIndex() {
  const { bookType } = useParams<{ bookType: string | undefined }>();

  return (
    <>
      <HeaderIndex bookType={bookType} />
      <main className="flex-1 overflow-y-auto p-[16px]">
        <BookList bookType={bookType} />
      </main>
    </>
  );
}

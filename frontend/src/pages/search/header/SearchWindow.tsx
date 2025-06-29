import { useState } from 'react';
import { useSearchStore } from '../../../store/searchStore';
// import { getBookList } from '../../../api/books';

export default function SearchWindow() {
  const addSearchKeyword = useSearchStore((state) => state.addSearchKeyword);
  const [searchValue, setSearchValue] = useState<string>('');

  async function searchBooks() {
    // const result = await getBookList();
    // console.log('searchBooks API result : ', result);
    console.log('책 검색 API 요청 결과');
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addSearchKeyword(searchValue);
        searchBooks();
      }}
      className="flex items-center h-[40px] w-[calc(100%-32px)] pl-[24px] pr-[12px] rounded-full bg-[#F3F4F6]"
    >
      <input
        type="text"
        className="min-w-0 flex-1 h-full "
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
        placeholder="도서 제목 또는 저자 검색"
      />

      {searchValue && (
        <button
          className="shrink-0 w-[20px] h-[20px] bg-100"
          style={{ backgroundImage: "url('/icons/button/clearSearch.svg')" }}
          type="button"
          onClick={() => {
            setSearchValue('');
          }}
        ></button>
      )}

      <button
        className="shrink-0 inline-block w-[20px] h-[20px] bg-100"
        style={{ backgroundImage: "url('/icons/button/icon_search.svg')" }}
        type="submit"
      ></button>
    </form>
  );
}

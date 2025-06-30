import { useNavigate } from 'react-router-dom';
import { useResultSearchStore } from '../../../store/resultSearchStore';

export default function SearchResults() {
  const navigate = useNavigate();
  const { searchResults, isLoading, searchQuery } = useResultSearchStore();

  // 로딩 중일 때
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2 text-gray-600">검색 중...</span>
      </div>
    );
  }

  // 검색어가 없을 때 (초기 상태)
  if (!searchQuery) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>검색어를 입력하고 검색해보세요</p>
      </div>
    );
  }

  // 검색 결과가 없을 때
  if (searchResults.length === 0) {
    const noResultMessage = `${searchQuery}에 대한 검색 결과가 없습니다.`;
    return (
      <div className="text-center py-8">
        <h2 className="section-title mb-4">검색 결과</h2>
        <p className="text-gray-500">{noResultMessage}</p>
      </div>
    );
  }

  // 검색 결과가 있을 때
  const resultTitle = `${searchQuery} 검색 결과 (${searchResults.length}건)`;
  
  // 책 상세 페이지로 이동
  function goDetail(isbn13: number) {
    navigate(`/detail/${isbn13}`);
  }

  return (
    <div>
      <h2 className="section-title mb-4">{resultTitle}</h2>
      <ul className="space-y-4">
        {searchResults.map((book) => (
          <li key={book.isbn13} className="flex gap-4 p-4 border rounded-[16px]"
          onClick={() => goDetail(book.isbn13)}>
            <img 
              className="block book-cover object-cover" 
              src={book.cover} 
              alt={book.title} 
            />
            <div className="flex-1">
              <p className="book-title font-semibold text-lg mb-1">{book.title}</p>
              <p className="book-author text-gray-600 mb-2">{book.author}</p>
              <p className="book-publisher text-sm text-gray-500 mb-2">{book.publisher}</p>
              <p className="book-description text-sm text-gray-700 line-clamp-2">
                {book.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

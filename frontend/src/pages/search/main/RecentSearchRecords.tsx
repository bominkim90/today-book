import { useSearchStore } from '../../../store/searchStore';

export default function SearchResults() {
  const recentSearches = useSearchStore((state) => state.recentSearches);
  const clearAllStorage = useSearchStore((state) => state.clearAllStorage);
  const removeOneStorage = useSearchStore((state) => state.removeOneStorage);

  return (
    <div>
      <div className="flex justify-between items-center mb-[8px]">
        <p>최근 검색어</p>
        <button
          type="button"
          onClick={() => {
            clearAllStorage();
          }}
        >
          전체 삭제
        </button>
      </div>

      <div className="flex gap-[8px] flex-wrap mb-[24px]">
        {recentSearches.map((value, index) => (
          <div
            key={index}
            className="rounded-full  inline-flex items-center py-[6px] px-[12px] bg-mainGray text-[14px]"
          >
            {value}
            <button
              className="bg-100 ml-[6px] w-[14px] h-[14px]"
              style={{ backgroundImage: "url('/icons/button/xBtn.svg')" }}
              onClick={() => {
                removeOneStorage(value);
              }}
            >
              <span className="sr-only">삭제</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

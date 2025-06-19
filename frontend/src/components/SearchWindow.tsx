export default function SearchWindow() {
  return (
    <form className="block h-[40px] flex-1 relative">
      <input
        className="p-[18px] rounded-full block w-full h-full bg-[#F3F4F6]"
        placeholder="도서 제목 또는 저자 검색"
      />
      <button
        className="absolute right-[12px] top-[50%] translate-y-[-50%] block w-[20px] h-[20px]"
        style={{ background: "url('/icons/icon_search.svg') center/cover no-repeat" }}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      ></button>
    </form>
  );
}

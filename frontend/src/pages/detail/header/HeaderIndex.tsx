import BackButton from '../../../components/BackBtn';

export default function HeaderIndex() {
  return (
    <header className="shirink-0 py-[12px] px-[16px] h-[64px] shadow-sm flex items-center gap-[8px]">
      <BackButton />
      <h1 className="flex-1 flex justify-center">도서 상세</h1>
      <button
        type="button"
        className="bg-100 w-[32px] h-[32px] shrink-0"
        style={{ backgroundImage: "url('/icons/button/share.svg')" }}
      ></button>
    </header>
  );
}

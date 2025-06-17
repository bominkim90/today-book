import BackButton from '../../components/BackButtton';

export default function HeaderDetail() {
  return (
    <header className="shirink-0 py-[12px] px-[16px] h-[52px] shadow-sm flex items-center">
      <BackButton />
      <h1 className="page-title">도서 상세</h1>
      <button type="button">공유버튼</button>
    </header>
  );
}

import BackButton from '../../../components/BackBtn';
import SearchWindow from './SearchWindow';

export default function HeaderSearch() {
  return (
    <header className="shirink-0 py-[12px] px-[16px] h-[64px] shadow-sm flex items-center">
      <BackButton />
      <SearchWindow />
    </header>
  );
}

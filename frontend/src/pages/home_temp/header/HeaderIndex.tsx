import Logo from '../../../components/Logo';
import SearchWindowHome from './SearchWindowHome';

export default function HeaderIndex() {
  return (
    <header className="shirink-0 py-[12px] px-[16px] h-[64px] shadow-sm flex items-center gap-[8px]">
      <Logo />
      <SearchWindowHome />
    </header>
  );
}

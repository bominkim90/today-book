import NavBtn from './NavBtn';

export default function BottomNav() {
  return (
    <nav className="layout-bottomNav">
      <NavBtn href="/" />
      <NavBtn href="/search" />
      <NavBtn href="/likes" />
      <NavBtn href="/my" />
    </nav>
  );
}

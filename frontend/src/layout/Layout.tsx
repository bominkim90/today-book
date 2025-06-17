import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav/BottomNav';
import HeaderHome from './Header/HeaderHome';
import HeaderDetail from './Header/HeaderDetail';
import HeaderList from './Header/HeaderList';
import HeaderSearch from './Header/HeaderSearch';

export default function Layout() {
  const { pathname } = useLocation();

  function renderHeader() {
    if (pathname.startsWith('/detail')) return <HeaderDetail />;
    if (pathname.startsWith('/list')) return <HeaderList />;
    if (pathname.startsWith('/search')) return <HeaderSearch />;
    return <HeaderHome />;
  }

  return (
    <div className="flex flex-col h-screen">
      {renderHeader()}

      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}

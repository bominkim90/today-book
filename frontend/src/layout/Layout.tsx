import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav/BottomNav';

export default function Layout() {
  // function renderHeader() {
  //   if (pathname.startsWith('/detail')) return <HeaderDetail />;
  //   if (pathname.startsWith('/list')) return <HeaderList />;
  //   if (pathname.startsWith('/search')) return <HeaderSearch />;
  //   return <HeaderHome />;
  // }

  return (
    <div className="flex flex-col h-screen">
      {/* <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main> */}

      <Outlet />
      <BottomNav />
    </div>
  );
}

import Header from './Header.jsx';
import CartOverview from '../features/cart/CartOverview.jsx';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader.jsx';

export default function AppLayout() {
  const isLoading = useNavigation().state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl overflow-scroll">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

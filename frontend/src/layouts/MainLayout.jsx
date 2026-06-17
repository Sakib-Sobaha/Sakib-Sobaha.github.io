import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SpiderWeb from '../components/SpiderWeb';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SpiderWeb />
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

import { Outlet } from 'react-router-dom';
import { Footer } from '../UI/footer/Footer';
import { Header } from '../UI/header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

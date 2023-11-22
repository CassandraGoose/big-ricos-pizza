import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import ModalContext from './Context/ModalContext';
import Navigation from './Navigation/Navigation';
import SplashFooter from './Footer/SplashFooter';
import Modal from './components/Modal';

function Layout() {
  const { modalVisible } = useContext(ModalContext);
  console.log(modalVisible);
  return (
    <>
      {modalVisible && <Modal />}
      <Navigation />
      <Outlet />
      <SplashFooter />
    </>
  );
}

export default Layout;

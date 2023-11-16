import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import SplashFooter from './Footer/SplashFooter';

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <SplashFooter />
    </>
  )
}

export default Layout;
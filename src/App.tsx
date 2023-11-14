import Navigation from './Main/Navigation/Navigation';
import StartOrder from './Main/StartOrder';
import Deals from './Main/Deals/Deals';
import MenuInvitation from './Main/MenuInvitation';
import SplashFooter from './Main/Footer/SplashFooter';
import LowerMenu from './Main/LowerMenu';

function App() {
  return (
    <>
      <Navigation />
      <main className='flex flex-col items-center justify-center font-oswald uppercase'>
        <StartOrder />
        <Deals />
        <MenuInvitation />
      </main>
      <LowerMenu />
      <SplashFooter />
    </>
  );
}

export default App;

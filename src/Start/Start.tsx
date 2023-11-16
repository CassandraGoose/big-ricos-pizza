import StartOrder from './StartOrder';
import Deals from './Deals/Deals';
import MenuInvitation from './MenuInvitation';
import LowerMenu from './LowerMenu';

function Start() {
  return (
    <>
      <main className='flex flex-col items-center justify-center font-oswald uppercase'>
        <StartOrder />
        <Deals />
        <MenuInvitation />
      </main>
      <LowerMenu />
    </>
  );
}

export default Start;

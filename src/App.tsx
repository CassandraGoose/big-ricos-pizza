import Navigation from './sections/Navigation';
import StartOrder from './sections/StartOrder';
import Deals from './sections/Deals';
import MenuInvitation from './sections/MenuInvitation';

function App() {
  return (
    <>
      <Navigation />
      <main className='flex flex-col items-center justify-center font-oswald uppercase'>
        <StartOrder />
        <Deals />
        <MenuInvitation />
      </main>
    </>
  );
}

export default App;

import Navigation from './sections/Navigation';
import StartOrder from './sections/StartOrder';
import Deals from './sections/Deals';

function App() {
  return (
    <>
      <Navigation />
      <main className='flex flex-col items-center justify-center font-oswald uppercase'>
        <StartOrder />
        <Deals />
      </main>
    </>
  );
}

export default App;

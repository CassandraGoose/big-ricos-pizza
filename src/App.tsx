import Navigation from './Navigation';
import StartOrder from './StartOrder';
import Deals from './Deals';

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

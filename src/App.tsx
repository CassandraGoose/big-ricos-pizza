import Navigation from './Navigation';
import StartOrder from './StartOrder';

function App() {
  return (
    <>
      <Navigation />
      <main className='flex justify-center font-oswald uppercase'>
        <StartOrder />
      </main>
    </>
  );
}

export default App;

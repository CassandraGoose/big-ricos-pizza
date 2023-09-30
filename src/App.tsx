import Logo from './assets/logo.svg';

function App() {
  return (
    <>
      <nav className='bg-blue text-white flex justify-center font-oswald'>
        <div className='max-w-75 flex items-center'>
          <ul className='flex items-center uppercase'>
            <li>
              <img
                src={Logo}
                className='h-12'
                alt='Definitely Big Ricos logo'
              />
            </li>
            <li className='flex flex-col items-center p-4'>
              <span>Order</span>
              <span>Online</span>
            </li>
            <li className='p-4'>Locations</li>
            <li className='p-4'>Menu</li>
            <li className='p-4'>Coupons</li>
            <li className='p-4'>Tracker</li>
            <li className='p-4'>Rewards</li>
            <li className='flex'>
              <div className='flex flex-col justify-right'>
                <span className='block w-0 h-0 border-solid border-t-0 border-r-[1.315rem] border-b-[1.31rem] border-l-0 border-t-blue border-r-white border-b-blue border-l-blue'></span>
                <span className='block w-0 h-0 border-solid border-t-0 border-b-[1.315rem] border-l-[1.315rem] border-r-0 border-r-blue border-t-blue border-l-blue border-b-white'></span>
              </div>

              <span className='flex flex-col justify-center items-center bg-white text-blue h-1/2 text-xs px-2 py-1'>
                <span>
                  Now, earn <span className='text-xxs'>free</span> Rico's
                </span>
                <span className='text-xxs'>every 2 orders</span>
              </span>
              <span className='block w-0 h-0 border-solid border-t-[1.31rem] border-b-[1.31rem] border-l-[1.31rem] border-r-0 border-t-blue border-b-blue border-r-blue border-l-white'></span>
            </li>
            <li className='text-sm flex flex-col items-center p-4'>
              <span>Sign in & earn</span>
              <span>rewards</span>
            </li>
            <li className='p-4'>cart</li>
          </ul>
        </div>
        <span className='w-0 h-0 border-solid border-t-[10px] border-b-[10px] border-l-[10px] border-r-0 border-t-blue border-b-blue border-r-blue border-l-white'></span>
      </nav>
    </>
  );
}

export default App;

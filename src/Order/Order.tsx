import Delivery from '../assets/icons/delivery.svg';
import Carryout from '../assets/icons/carryout.svg';

function Order() {
  return (
    <div className='flex flex-col w-full justify-center items-center text-dark-grey'>
      <div className='md:w-8/12 w-11/12 mt-4'>
        <h1 className='uppercase text-3xl py-2'>Order Options</h1>
        <div className='w-full shadow-lg shadow-dark-grey/50 rounded overflow-hidden'>
          <h2 className='bg-blue text-white uppercase px-2 py-1'>
            How do you want your Big Rico's today?
          </h2>
          <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center justify-around border-2 border-blue md:px-10 px-6 py-4 m-4 min-w-1/3 md:h-[9rem] h-[10rem]'>
              <span className='flex justify-center items-center'>
                <img
                  className='md:h-12 md:w-12 h-8 w-8 px-2'
                  src={Delivery}
                  alt='delivery car'
                />
                <h3 className='xl:text-2xl lg:text-xl md:text-md text-sm uppercase'>Delivery</h3>
              </span>
              <ul className='list-disc lg:text-sm text-xs font-medium'>
                <li>Traditional Delivery</li>
                <li>Big Rico's Hotspot</li>
              </ul>
            </div>
            <span className='uppercase md:text-xl text-xxs'>- or -</span>
            <div className='flex flex-col items-center justify-around border-2 border-blue md:px-10 px-6 py-4 m-4 min-w-1/3 md:h-[9rem] h-[10rem]'>
              <span className='flex justify-center items-center'>
                <img
                  className='md:h-12 md:w-12 h-8 w-8 px-1'
                  src={Carryout}
                  alt='carryout icon'
                />
                <h3 className='xl:text-2xl lg:text-lg md:text-md text-sm uppercase font'>Carryout</h3>
              </span>
              <ul className='list-disc lg:text-sm text-xs font-medium'>
                <li>Carside Delivery</li>
                <li>Store Pickup</li>
                <li>Pick-Up Window</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className='text-sm font-medium mt-4'>
        *Carryout available only at approved time. Call store for details
      </p>
    </div>
  );
}

export default Order;

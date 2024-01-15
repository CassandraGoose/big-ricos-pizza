import Delivery from '../assets/icons/delivery.svg';
import Carryout from '../assets/icons/carryout.svg';

function Order() {
  return (
    <div className='flex flex-col w-full justify-center items-center text-dark-grey'>
      <div className='w-8/12 mt-4'>
        <h1 className='uppercase text-3xl py-2'>Order Options</h1>
        <div className='w-full shadow-lg shadow-dark-grey/50 rounded overflow-hidden'>
          <h2 className='bg-blue text-white uppercase px-2 py-1'>
            How do you want your Big Rico's today?
          </h2>
          <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center justify-around border-2 border-blue px-10 py-4 m-4 min-w-1/3 h-[9rem]'>
              <span className='flex justify-center items-center'>
                <img
                  className='h-12 w-12 px-2'
                  src={Delivery}
                  alt='delivery car'
                />
                <h3 className='text-2xl uppercase'>Delivery</h3>
              </span>
              <ul className='list-disc text-sm font-medium'>
                <li>Traditional Delivery</li>
                <li>Big Rico's Hotspot</li>
              </ul>
            </div>
            <span className='uppercase'>- or -</span>
            <div className='flex flex-col items-center justify-around border-2 border-blue px-10 py-4 m-4 min-w-1/3 h-[9rem]'>
              <span className='flex justify-center items-center'>
                <img
                  className='h-14 w-14 px-1'
                  src={Carryout}
                  alt='carryout icon'
                />
                <h3 className='text-2xl uppercase font'>Carryout</h3>
              </span>
              <ul className='list-disc text-sm font-medium'>
                <li>Big Ricos's Carside Delivery</li>
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

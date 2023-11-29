import StartOrder from '../components/StartOrder';
import Button from '../components/Button';

function Coupons() {
  return (
    <section className='flex flex-col justify-center items-center mt-2'>
      <div className='w-3/4 self-end'>
        <StartOrder />
      </div>
      <div className='w-1/2 flex flex-col mt-4'>
        <h1 className='text-4xl font-bold text-dark-grey uppercase self-start'>
          Big Rico's Coupons
        </h1>
        <p>Choose from the best restaurant coupons, promo codes, and offers.</p>
        <div>
          <div className='grid grid-row-6 grid-cols-[30%_30%_40%] bg-deals bg-fit bg-cover bg-right-2 text-white'>
            <div className='row-start-1 col-start-1 col-end-1 row-span-5 uppercase flex flex-col justify-center items-center p-2'>
              <div className='flex'>
                <span className='block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-r-[0.5rem] border-l-0 border-t-transparent border-b-transparent border-l-transparent border-r-white'></span>
                <p className='flex justify-center items-center bg-white text-blue px-4 text-md font-medium'>
                  Big Deal
                </p>
                <span className='block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-l-[0.5rem] border-r-0 border-t-transparent border-b-transparent border-r-transparent border-l-white'></span>
              </div>
              <p className='text-2xl font-medium text-shadow text-center'>
                Pay the normal price
              </p>
              <p className='text-md tracking-widester text-shadow'>including</p>
              <div className='flex drop-shadow-lg'>
                <div>
                  <span className='block w-0 h-0 border-solid border-t-0 border-r-[1rem] border-b-[1rem] border-l-0 border-t-transparent border-r-red border-b-transparent border-l-transparent'></span>
                  <span className='block w-0 h-0 border-solid border-t-0 border-b-[1rem] border-l-[1rem] border-r-0 border-r-transparent border-t-transparent border-l-transparent border-b-red'></span>
                </div>
                <p className='flex justify-center items-center bg-red px-4 text-lg'>
                  <span className='text-shadow italic'>New</span>
                  &nbsp;&nbsp;Stewed
                </p>
                <div>
                  <span className='block w-0 h-0 border-solid border-t-0 border-l-[1rem] border-b-[1rem] border-r-0 border-t-transparent border-l-red border-b-transparent border-r-transparent'></span>
                  <span className='block w-0 h-0 border-solid border-t-0 border-b-[1rem] border-r-[1rem] border-l-0 border-l-transparent border-t-transparent border-r-transparent border-b-red'></span>
                </div>
              </div>
              <p className='text-lg tracking-widester'>tomatoes</p>
            </div>
            <div className='col-start-3 row-start-2 flex flex-col p-2'>
              <div className='grid grid-col-5 grid-row-2 w-1/2'>
                <span className='custom-outline text-white text-6xl col-start-1 row-start-1 font-bold'>
                  $
                </span>
                <span
                  className='custom-outline-shadow text-white text-6xl col-start-1 row-start-1 font-bold'
                  aria-hidden='true'>
                  $
                </span>
                <span className='custom-outline text-white text-9xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-1rem]'>
                  10
                </span>
                <span
                  className='custom-outline-shadow text-white text-9xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-1rem]'
                  aria-hidden='true'>
                  10
                </span>
                <span className='custom-outline text-white text-6xl col-start-3 col-end-5 row-start-1 font-bold'>
                  99
                </span>
                <span
                  className='custom-outline-shadow text-white text-6xl col-start-3 col-end-5 row-start-1 font-bold'
                  aria-hidden='true'>
                  99
                </span>
                <p className='col-start-3 col-end-4 row-start-2 text-white text-shadow normal-case italic text-3xl tracking-wider font-crimson'>
                  each
                </p>
              </div>
              <Button text='Order Now' xPadding='14' bgColor='red' />
            </div>
            <p className='col-start-1 col-end-4 row-start-6 text-xxs normal-case drop-shadow p-2'>
              This deal stricly adheres to the City Council's permanent ban on
              Wheat and Wheat By-Products. We do not serve Wheat and Wheat
              By-Products. There are no Wheat and Wheat By-Products on the
              premises of Big Rico's Pizza
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coupons;

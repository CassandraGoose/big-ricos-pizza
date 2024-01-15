import FakeButton from '../../components/FakeButton';

function BigDeal() {
  return (
    <section className='md:row-start-1 md:row-end-5 md:col-span-6 bg-big-deal bg-fit bg-cover bg-right'>
      <div className='flex flex-col h-full justify-between p-4'>
        <div className='w-1/2 flex'>
          <span className='block w-0 h-0 border-solid border-t-[1.35rem] border-b-[1.35rem] border-r-[0.75rem] border-l-0 border-t-transparent border-b-transparent border-l-transparent border-r-white'></span>
          <p className='flex flex-col justify-center items-center bg-white text-blue px-6 py-1 text-2xl'>
            Deals
          </p>
          <span className='block w-0 h-0 border-solid border-t-[1.35rem] border-b-[1.35rem] border-l-[0.75rem] border-r-0 border-t-transparent border-b-transparent border-r-transparent border-l-white'></span>
        </div>
        <p className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-white font-medium w-2/3 text-shadow'>
          Pay the price for the meal
        </p>
        <div className="flex ">
        <div className='flex flex-col items-center'>
          <p className='text-3xl tracking-widester text-white text-shadow'>
            including
          </p>
          <div className='flex drop-shadow-lg'>
            <div>
              <span className='block w-0 h-0 border-solid border-t-0 border-r-[1rem] border-b-[1rem] border-l-0 border-t-transparent border-r-red border-b-transparent border-l-transparent'></span>
              <span className='block w-0 h-0 border-solid border-t-0 border-b-[1rem] border-l-[1rem] border-r-0 border-r-transparent border-t-transparent border-l-transparent border-b-red'></span>
            </div>
            <p className='flex justify-center items-center bg-red text-white px-4 text-2xl'>
              <span className='text-shadow italic'>New</span>&nbsp;&nbsp;Stewed
            </p>
            <div>
              <span className='block w-0 h-0 border-solid border-t-0 border-l-[1rem] border-b-[1rem] border-r-0 border-t-transparent border-l-red border-b-transparent border-r-transparent'></span>
              <span className='block w-0 h-0 border-solid border-t-0 border-b-[1rem] border-r-[1rem] border-l-0 border-l-transparent border-t-transparent border-r-transparent border-b-red'></span>
            </div>
          </div>
          <p className='text-3xl tracking-widester text-white text-shadow'>
            Tomatoes
          </p>
        </div>
        </div>
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
          <p className="col-start-3 col-end-4 row-start-2 text-white text-shadow normal-case italic text-3xl tracking-wider font-crimson">each</p>
        </div>
        <div className='flex items-end'>
          <p className='text-xxs text-white normal-case text-shadow'>
            This deal stricly adheres to the City Council's permanent ban on
            Wheat and Wheat By-Products. We do not serve Wheat and Wheat
            By-Products. There are no Wheat and Wheat By-Products on the
            premises of Big Rico's Pizza
          </p>
          <FakeButton text='Order Now' xPadding='3' bgColor='red' nextPage='/restaurants' />
        </div>
      </div>
    </section>
  );
}

export default BigDeal;

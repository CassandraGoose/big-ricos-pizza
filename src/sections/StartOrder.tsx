import Button from '../components/Button';

function StartOrder() {
  return (
    <>
      <section className='hidden md:flex items-center justify-between my-8 w-8/12'>
        <div aria-hidden='true' className='w-20 h-[2px] bg-light-grey'></div>
        <p className='text-2xl text-blue font-medium'>Start your order</p>
        <div className='flex justify-center items-center'>
          <Button text='Delivery' xPadding='14' bgColor='red' />
          <p className='font-dm lowercase text-xl mx-4 text-blue'>or</p>
          <Button text='Carryout' xPadding='14' bgColor='red' />
        </div>
        <div aria-hidden='true' className='w-20 h-[2px] bg-light-grey'></div>
      </section>
      <div className='my-2 mx-20 w-11/12'>
        <button className='md:hidden bg-red text-white uppercase w-full rounded-sm mt-2 text-2xl py-4'>
          Order Online
        </button>
      </div>
    </>
  );
}

export default StartOrder;

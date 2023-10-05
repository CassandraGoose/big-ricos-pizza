function StartOrder() {
  return (
    <div className='flex items-center justify-between my-8 w-3/4'>
      <div aria-hidden='true' className='w-20 h-[2px] bg-light-grey'></div>
      <p className='text-2xl text-blue font-medium'>Start your order</p>
      <div className='flex justify-center items-center'>
        <button className='rounded-sm bg-red px-14 py-3 uppercase text-white'>
          Delivery
        </button>
        <p className='font-dm lowercase text-xl mx-4 text-blue'>or</p>
        <button className='rounded-sm bg-red px-14 py-3 uppercase text-white'>
          Carryout
        </button>
      </div>
      <div aria-hidden='true' className='w-20 h-[2px] bg-light-grey'></div>
    </div>
  );
}

export default StartOrder;

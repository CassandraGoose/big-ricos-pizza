import FakeButton from './FakeButton';

function StartOrder() {
  return (
    <div className='w-8/12 rounded-md p-4 flex justify-around items-center bg-blue text-white'>
      <p className='xl:text-3xl lg:text-2xl md:text-xl text-lg uppercase font-bold'>Start your order</p>
      <div className="md:visible md:flex hidden items-center">
        <FakeButton text='Delivery' xPadding='14' bgColor='red' nextPage="/restaurants" />
        <p className='font-dm lowercase text-xl mx-4'>or</p>
        <FakeButton text='Carryout' xPadding='14' bgColor='red' nextPage="/restaurants" />
      </div>
      <div className="visible md:hidden flex items-center ">
        <FakeButton text='Delivery' xPadding='5' bgColor='red' nextPage="/restaurants" />
        <p className='font-dm lowercase text-xl mx-4'>or</p>
        <FakeButton text='Carryout' xPadding='5' bgColor='red' nextPage="/restaurants" />
      </div>
    </div>
  );
}

export default StartOrder;

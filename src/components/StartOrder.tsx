import FakeButton from './FakeButton';

function StartOrder() {
  return (
    <div className='w-8/12 rounded-md p-4 flex justify-around items-center bg-blue text-white'>
      <p className='text-3xl uppercase font-bold'>Start your order</p>
      <FakeButton text='Delivery' xPadding='14' bgColor='red' nextPage="/restaurants" />
      <p className='font-dm lowercase text-xl mx-4'>or</p>
      <FakeButton text='Carryout' xPadding='14' bgColor='red' nextPage="/restaurants" />
    </div>
  );
}

export default StartOrder;

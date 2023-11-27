import Button from './Button';

function StartOrder() {
  return (
    <div className='w-8/12 rounded-md p-4 flex justify-around items-center bg-blue text-white'>
      <p className='text-3xl uppercase font-bold'>Start your order</p>
      <Button text='Delivery' xPadding='14' bgColor='red' />
      <p className='font-dm lowercase text-xl mx-4'>or</p>
      <Button text='Carryout' xPadding='14' bgColor='red' />
    </div>
  );
}

export default StartOrder;

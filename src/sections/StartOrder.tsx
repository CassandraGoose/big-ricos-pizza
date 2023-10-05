import Button from '../components/Button';

function StartOrder() {
  return (
    <div className='flex items-center justify-between my-8 w-8/12'>
      <div aria-hidden='true' className='w-20 h-[2px] bg-light-grey'></div>
      <p className='text-2xl text-blue font-medium'>Start your order</p>
      <div className='flex justify-center items-center'>
        <Button text='Delivery' px={14} py={3} bgColor='red' textColor='white' wrap='uppercase' />
        <p className='font-dm lowercase text-xl mx-4 text-blue'>or</p>
        <Button text='Carryout' px={14} py={3} bgColor='red' textColor='white' wrap='uppercase' />
      </div>
      <div aria-hidden='true' className='w-20 h-[2px] bg-light-grey'></div>
    </div>
  );
}

export default StartOrder;

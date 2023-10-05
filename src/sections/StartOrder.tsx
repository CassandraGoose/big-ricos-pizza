import Button from '../components/Button';

function StartOrder() {
  return (
    <section className='flex items-center justify-between my-8 w-8/12'>
      <div aria-hidden='true' className='w-20 h-[2px] bg-light-grey'></div>
      <p className='text-2xl text-blue font-medium'>Start your order</p>
      <div className='flex justify-center items-center'>
        <Button text='Delivery' xPadding='14' bgColor='red' />
        <p className='font-dm lowercase text-xl mx-4 text-blue'>or</p>
        <Button text='Carryout' xPadding='14' bgColor='red' />
      </div>
      <div aria-hidden='true' className='w-20 h-[2px] bg-light-grey'></div>
    </section>
  );
}

export default StartOrder;

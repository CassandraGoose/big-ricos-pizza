import Button from '../components/Button';

function MenuInvitation() {
  return (
    <section className='flex flex-col items-center w-8/12'>
      <p className='text-2xl font-medium text-grey normal-case'>
        Browse Our Menu
      </p>
      <div className='bg-menu-invitation bg-cover bg-center flex p-2 w-full py-14 mt-6'>
        <div className='flex flex-col items-center justify-center ml-8'>
          <div className='h-auto w-12 mx-14 mb-6'>
            <svg viewBox='0 0 64.83 95.55' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='m2 18h60.83v75.55h-60.83zm47.83-16-47.83 16h47.83zm-22.83 40.12h9.28m-15.94 9.86h22.6m-18.69 9.86h14.78m-18.69 9.86h22.6'
                fill='none'
                stroke='#fff'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='4'
              />
            </svg>
          </div>
          <Button text='View Full Menu' bgColor='red' xPadding='5' />
        </div>
      </div>
    </section>
  );
}

export default MenuInvitation;

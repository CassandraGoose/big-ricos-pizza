import Button from '../components/Button';
import BookIcon from '../assets/book_icon.svg';

function MenuInvitation() {
  return (
    <section className='flex flex-col items-center w-8/12'>
      <p className='text-2xl font-medium text-grey normal-case'>
        Browse Our Menu
      </p>
      <div className='bg-menu-invitation bg-cover bg-center flex p-2 w-full py-14 mt-6'>
        <div className='flex flex-col items-center justify-center ml-8'>
          <div className='h-auto w-12 mx-14 mb-6'>
           <img src={BookIcon} alt='book icon' />
          </div>
          <Button text='View Full Menu' bgColor='red' xPadding='5' />
        </div>
      </div>
    </section>
  );
}

export default MenuInvitation;

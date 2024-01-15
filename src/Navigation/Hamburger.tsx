import HamburgerLine from '../assets/icons/hamburger_line.svg';

function Hamburger() {
  return (
    <div className='md:invisible flex items-center justify-center'>
      <div className='h-6 w-6'>
        <img src={HamburgerLine} alt='hamburger menu line' />
      </div>
    </div>
  );
}

export default Hamburger;

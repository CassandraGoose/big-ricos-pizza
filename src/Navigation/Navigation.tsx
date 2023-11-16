import Logo from '../assets/logo.svg';
import Cart from '../assets/cart.svg';
import NavItem from './NavItem';
import Hamburger from './Hamburger';
import FreeRicos from './FreeRicos';
import MobileLowerList from './MobileLowerList';

function Navigation() {
  return (
    <nav className='bg-blue text-white flex md:flex-row flex-col justify-center items-center md:px-auto font-oswald shadow-lg shadow-dark-grey/50'>
      <ul className='flex md:w-8/12 w-11/12 items-center justify-between uppercase md:h-20 h-14'>
        <li className='md:hidden'>
          <Hamburger />
        </li>
        <li className='cursor-pointer flex items-center justify-center'>
          <img
            src={Logo}
            className='h-12 min-w-[40px]'
            alt='Definitely Big Ricos logo'
          />
        </li>
        <NavItem
          text={
            <span>
              Order
              <br />
              Online
            </span>
          }
        />
        <NavItem text='Locations' />
        <NavItem text='Menu' />
        <NavItem text='Coupons' />
        <NavItem text='Tracker' />
        <NavItem text='Rewards' />
        <li className='md:inline hidden'>
          <FreeRicos light={false} />
        </li>
        <li className='text-sm md:flex flex-col items-center justify-center p-4 h-full bg-dark-blue cursor-pointer hidden'>
          <span>Sign in & earn</span>
          <span>rewards</span>
        </li>
        <li className='p-4 flex flex-col justify-center cursor-pointer'>
          <img src={Cart} className='h-6' alt='cart icon' />
          <span>cart</span>
        </li>
      </ul>
      <MobileLowerList />
    </nav>
  );
}

export default Navigation;

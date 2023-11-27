import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ModalContext from '../Context/ModalContext';
import Logo from '../assets/logo.svg';
import Cart from '../assets/cart.svg';
import Hamburger from './Hamburger';
import FreeRicos from './FreeRicos';
import MobileLowerList from './MobileLowerList';

function Navigation() {
  const { setModalVisible } = useContext(ModalContext);
  return (
    <nav className='bg-blue text-white flex md:flex-row flex-col justify-center items-center md:px-auto font-oswald shadow-lg shadow-dark-grey/50'>
      <ul className='flex md:w-8/12 w-11/12 items-center justify-between uppercase md:h-20 h-14'>
        <li className='md:hidden'>
          <Hamburger />
        </li>
        <li className='cursor-pointer flex items-center justify-center'>
          <Link to={`/`}>
            <img
              src={Logo}
              className='h-12 min-w-[40px]'
              alt='Definitely Big Ricos logo'
            />
          </Link>
        </li>
        <li className='p-4 md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden'>
          <Link to={`restaurants`}>
            <span>
              Order
              <br />
              Online
            </span>
          </Link>
        </li>
        <li className='p-4 md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden'>
          <Link to={`restaurants`}>Locations</Link>
        </li>
        <li className='p-4 md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden'>
          <Link to={`menu`}>Menu</Link>
        </li>
        <li className='p-4 md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden'>
          Coupons
        </li>
        <li className='p-4 md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden'>
          Tracker
        </li>
        <li className='p-4 md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden'>
          Rewards
        </li>
        <li className='md:inline hidden'>
          <FreeRicos light={false} />
        </li>
        <li
          className='text-sm md:flex flex-col items-center justify-center p-4 h-full bg-dark-blue cursor-pointer hidden'
          onClick={() => setModalVisible(true)}>
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

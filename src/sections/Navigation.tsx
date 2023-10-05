import Logo from '../assets/logo.svg';
import Cart from '../assets/cart.svg';
import NavItem from '../components/NavItem';

function Navigation() {
  return (
    <nav className='bg-blue text-white flex justify-center font-oswald shadow-lg shadow-dark-grey/50'>
      <ul className='flex w-8/12 items-center justify-between uppercase h-20'>
        <li className="cursor-pointer">
          <img src={Logo} className='h-12' alt='Definitely Big Ricos logo' />
        </li>
        <NavItem text={<span>Order<br />Online</span>} />
        <NavItem text='Locations' />
        <NavItem text='Menu' />
        <NavItem text='Coupons' />
        <NavItem text='Tracker' />
        <NavItem text='Rewards' />
        <li className='flex'>
          <div className='flex flex-col justify-right'>
            <span className='block w-0 h-0 border-solid border-t-0 border-r-[1.4rem] border-b-[1.4rem] border-l-0 border-t-blue border-r-white border-b-blue border-l-blue'></span>
            <span className='block w-0 h-0 border-solid border-t-0 border-b-[1.33rem] border-l-[1.4rem] border-r-0 border-r-blue border-t-blue border-l-blue border-b-white'></span>
          </div>
          <span className='flex flex-col justify-center items-center bg-white text-blue h-1/2 text-xs px-2 py-1'>
            <span className='flex justify-center items-center whitespace-nowrap'>
              Now, earn
              <div className='flex mx-1'>
                <div className='flex flex-col justify-right'>
                  <span className='block w-0 h-0 border-solid border-t-0 border-r-[0.5rem] border-b-[0.5rem] border-l-0 border-t-white border-r-red border-b-white border-l-white'></span>
                  <span className='block w-0 h-0 border-solid border-t-0 border-b-[0.48rem] border-l-[0.5rem] border-r-0 border-r-white border-t-white border-l-white border-b-red'></span>
                </div>
                <span className='text-xxs bg-red text-white h-1/2 px-1'>
                  free
                </span>
                <span className='block w-0 h-0 border-solid border-t-[0.5rem] border-b-[0.5rem] border-l-[0.5rem] border-r-0 border-t-white border-b-white border-r-white border-l-red'></span>
              </div>
              Rico's
            </span>
            <span className='text-xxs font-light tracking-widest'>
              every 2 orders
            </span>
          </span>
          <span className='block w-0 h-0 border-solid border-t-[1.35rem] border-b-[1.35rem] border-l-[1.35rem] border-r-0 border-t-blue border-b-blue border-r-blue border-l-white'></span>
        </li>
        <li className='text-sm flex flex-col items-center justify-center p-4 h-full bg-dark-blue cursor-pointer'>
          <span>Sign in & earn</span>
          <span>rewards</span>
        </li>
        <li className='p-4 flex flex-col justify-center cursor-pointer'>
          <img src={Cart} className='h-6' alt='cart icon' />
          <span>cart</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

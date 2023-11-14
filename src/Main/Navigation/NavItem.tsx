import { ReactNode } from 'react';

function NavItem({ text }: { text: string | ReactNode }) {
  return (
    <li className='p-4 md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden'>
      {text}
    </li>
  );
}

export default NavItem;

import FreeRicos from './FreeRicos';

function MobileLowerList() {
  return (
    <div className='md:hidden w-full bg-white drop-shadow text-blue font-medium h-14 flex items-center justify-center'>
      <ul className='flex w-11/12 items-center justify-between uppercase'>
        <li className='text-blue font-medium text-lg'>Tracker</li>
        <li>
          <FreeRicos light />
        </li>
        <li className='text-blue font-medium text-lg'>Sign In</li>
      </ul>
    </div>
  );
}

export default MobileLowerList;

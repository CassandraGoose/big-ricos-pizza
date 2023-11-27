import StartOrder from '../components/StartOrder';
import MenuList from './MenuList';

function Menu() {
  return (
    <section className='flex flex-col items-center justify-center mt-4'>
      <StartOrder />
      <div className='w-8/12 flex flex-col mt-4'>
        <h1 className='text-4xl font-bold text-dark-grey uppercase self-start'>
          Big Rico's Menu
        </h1>
        <p>
          Discover everything on Big Rico's menu. Explore our pizza, stewed
          tomatoes, and melted cheese perfect for carryout or delivery.
        </p>
        <div>
          <MenuList />
        </div>
      </div>
    </section>
  );
}

export default Menu;

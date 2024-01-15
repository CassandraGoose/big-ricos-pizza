import { Link } from 'react-router-dom';
import Pizza from '../assets/content/menu_item_pizza.webp';

interface Item {
  title: string;
  description: string;
  featuredItem: boolean;
}

function MenuItem({ item }: { item: Item }) {
  return (
    <div className='my-2 text-blue font-medium hover:bg-blue hover:text-white'>
      <div className='w-full border border-light-grey overflow-clip max-h-20 flex items-center'>
        <img
          className='-ml-12 md:h-[200px] h-[100px] w-auto self-start'
          src={Pizza}
          alt={item.description}
        />
        <h2 className='md:text-xl text-lg p-8'><Link to="/builder">{item.title}</Link></h2>
      </div>
      {item.featuredItem && (
        <ul className='w-full border border-t-0 border-light-grey flex justify-between items-center p-4 md:text-lg text-xs text-center'>
          <li><Link to="/builder">Hand Tossed</Link></li>
          <li><Link to="/builder">Handmade Pan</Link></li>
          <li><Link to="/builder">Crunchy Thin Crust</Link></li>
          <li><Link to="/builder">Brooklyn Style</Link></li>
        </ul>
      )}
    </div>
  );
}

export default MenuItem;

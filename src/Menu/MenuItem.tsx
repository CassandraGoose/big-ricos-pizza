import Placeholder from '../assets/placeholder_menu_image.png';

interface Item {
  title: string;
  description: string;
  image: string;
  featuredItem: boolean;
}

function MenuItem({ item }: { item: Item }) {
  return (
    <div className='my-2 text-blue font-medium'>
      <div className='w-full border border-light-grey overflow-clip max-h-20 flex items-center'>
        <img
          className='-ml-12 h-[200px] w-auto self-start'
          src={Placeholder}
          alt={item.description}
        />
        <h2 className='text-xl p-8'>{item.title}</h2>
      </div>
      {item.featuredItem && (
        <ul className='w-full border border-t-0 border-light-grey flex justify-between items-center p-4'>
          <li>Hand Tossed</li>
          <li>Handmade Pan</li>
          <li>Crunchy Thin Crust</li>
          <li>Brooklyn Style</li>
        </ul>
      )}
    </div>
  );
}

export default MenuItem;

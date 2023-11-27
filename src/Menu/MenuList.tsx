import Placeholder from '../assets/placeholder_menu_image.png';

function MenuList() {
  const menu = [
    {
      title: 'Build Your Own Wheat-free Pizza',
      description:
        'Bizza with chese, toppings, and gluten free crust as ordered by the city council.',
      image: '../assets/placeholder_menu_image.png',
      featuredItem: true,
    },
    {
      title: 'Specialty Pizzas',
      description: 'A selection of our favorite pizzas.',
      image: '../assets/placeholder_menu_image.png',
      featuredItem: false,
    },
    {
      title: 'Stewed Tomatoes',
      description: 'Classic bowls of stewed tomatoes.',
      image: '../assets/placeholder_menu_image.png',
      featuredItem: false,
    },
    {
      title: 'Melted Cheese',
      description: 'A bowl of melted cheese.',
      image: '../assets/placeholder_menu_image.png',
      featuredItem: false,
    },
  ];

  return (
    <div>
      {menu.map((item) => (
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
      ))}
    </div>
  );
}

export default MenuList;

import MenuItem from './MenuItem';

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

  interface Item {
    title: string;
    description: string;
    image: string;
    featuredItem: boolean;
  }

  return (
    <div>
      {menu.map((item: Item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
}

export default MenuList;

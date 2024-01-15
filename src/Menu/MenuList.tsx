import MenuItem from './MenuItem';

function MenuList() {
  const menu = [
    {
      title: 'Build Your Own Wheat-free Pizza',
      description:
        'Bizza with chese, toppings, and gluten free crust as ordered by the city council.',
      featuredItem: true,
    },
    {
      title: 'Specialty Pizzas',
      description: 'A selection of our favorite pizzas.',
      featuredItem: false,
    },
    {
      title: 'Stewed Tomatoes',
      description: 'Classic bowls of stewed tomatoes.',
      featuredItem: false,
    },
    {
      title: 'Melted Cheese',
      description: 'A bowl of melted cheese.',
      featuredItem: false,
    },
  ];

  interface Item {
    title: string;
    description: string;
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

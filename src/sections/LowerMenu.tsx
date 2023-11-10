function LowerMenu() {
  return (
    <section className='flex justify-center items-center'>
      <ul className='flex md:flex-row flex-col justify-around items-center w-8/12 my-16 uppercase font-medium text-blue text-lg leading-10 md:leading-none'>
        <li className='hidden md:inline'>Locations</li>
        <li>Email & Text Offers</li>
        <li>Gift Cards</li>
        <li className='hidden md:inline'>Tracker</li>
        <li>Nutrition</li>
      </ul>
    </section>
  );
}

export default LowerMenu;

function LowerMenu() {
  return (
    <section className='flex justify-center items-center'>
      <ul className='flex md:flex-row flex-col justify-around items-center w-8/12 my-16 uppercase font-medium text-blue text-lg sm:leading-10'>
        <li className="sm:hidden">Locations</li>
        <li>Email & Text Offers</li>
        <li>Gift Cards</li>
        <li className="sm:hidden">Tracker</li>
        <li>Nutrition</li>
      </ul>
    </section>
  );
}

export default LowerMenu;

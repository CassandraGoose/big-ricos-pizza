import { Link } from "react-router-dom";

function LowerMenu() {

  return (
    <section className="flex justify-center items-center">
      <ul
        className="flex md:flex-row flex-col justify-around items-center w-8/12 my-16 uppercase font-medium text-blue lg:text-lg text-md leading-10 md:leading-none text-center">
        <li className="hidden md:inline cursor-pointer">
          <Link to={`restaurants`}>Locations</Link>
        </li>
        <li><Link to={`offers`}>Email & Text Offers</Link></li>
        <li><Link to={`gift-cards`}>Gift Cards</Link></li>
        <li className="hidden md:inline"><Link to={`tracker`}>Tracker</Link></li>
        <li><Link to={`ingredients`}>Nutrition</Link></li>
      </ul>
    </section>
  );
}

export default LowerMenu;

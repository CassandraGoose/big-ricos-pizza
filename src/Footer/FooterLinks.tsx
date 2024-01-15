import { Link } from "react-router-dom";

function FooterLinks() {

  return (
    <div className="w-11/12 md:flex justify-between text-sm font-light leading-8 bg-light-grey hidden">
      <ul className="footer-ul cursor-pointer" aria-label="Our Company">
        <li>
          <Link to="jobs">Jobs</Link>
        </li>
        <li>
          <Link to="about">About Big Rico's</Link>
        </li>
      </ul>
      <ul className="footer-ul cursor-pointer" aria-label="Our Pizza">
        <li>
          <Link to="nutrition">Nutrition</Link>
        </li>
        <li>
          <Link to="ingredients">Allergen Info</Link>
        </li>
        <li>
          <Link to="ingredients">Gluten Free Warning</Link>
        </li>
        <li>
          <Link to="ingredients">Ingredients</Link>
        </li>
      </ul>
      <ul className="footer-ul cursor-pointer" aria-label="Additional Services">
        <li>
          <Link to="smart-school">Smart Slice School Lunch</Link>
        </li>
        <li>
          <Link to="business-orders">Large Business Orders</Link>
        </li>
        <li>
          <Link to="wedding-registry">Wedding Registry</Link>
        </li>
        <li>
          <Link to="fundraising">Fundraising</Link>
        </li>
        <li>
          <Link to="gift-cards">Gift Cards</Link>
        </li>
        <li>
          <Link to="real-estate">Real Estate</Link>
        </li>
        <li>
          <Link to="recycling">Recycling</Link>
        </li>
      </ul>
      <ul className="footer-ul cursor-pointer" aria-label="Customer Service">
        <li>
          <Link></Link>Customer Support
        </li>
        <li>
          <Link></Link>Do Not Sell/Share My Info
        </li>
        <li>
          <Link></Link>Email & Text Offers
        </li>
        <li>
          <Link></Link>Carryout Insurance
        </li>
        <li>
          <Link></Link>Privacy
        </li>
        <li>
          <Link></Link>Legal
        </li>
        <li>
          <Link></Link>español
        </li>
      </ul>
    </div>
  );
}

export default FooterLinks;

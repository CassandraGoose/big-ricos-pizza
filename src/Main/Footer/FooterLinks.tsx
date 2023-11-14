function FooterLinks() {
  return (
    <div className='w-11/12 md:flex justify-between text-sm font-light leading-8 bg-light-grey hidden'>
      <ul className='footer-ul' aria-label='Our Company'>
        <li>Corporate</li>
        <li>Jobs</li>
        <li>About Big Rico's</li>
      </ul>
      <ul className='footer-ul' aria-label='Our Pizza'>
        <li>Nutrition</li>
        <li>Allergen Info</li>
        <li>Gluten Free Warning</li>
        <li>Ingredients</li>
      </ul>
      <ul className='footer-ul' aria-label='Additional Services'>
        <li>Smart Slice School Lunch</li>
        <li>Large Business Orders</li>
        <li>Wedding Registry</li>
        <li>Fundraising</li>
        <li>Gift Cards</li>
        <li>Real Estate</li>
        <li>Recycling</li>
      </ul>
      <ul className='footer-ul' aria-label='Customer Service'>
        <li>Customer Support</li>
        <li>Do Not Sell/Share My Info</li>
        <li>Email & Text Offers</li>
        <li>Carryout Insurance</li>
        <li>Privacy</li>
        <li>Legal</li>
        <li>español</li>
      </ul>
    </div>
  );
}

export default FooterLinks;

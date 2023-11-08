import placeholderLogo from '../assets/placeholder.webp';
import placeHolderRadio from '../assets/placeholder_radio.png';
import placeHolderSheriff from '../assets/placeholder_sheriff.png';

function SplashFooter() {
  return (
    <section>
      <div className='bg-light-grey text-dark-grey flex justify-center items center'>
        <div className='w-8/12 flex flex-col items-center justify-between'>
          <div className='w-full flex justify-between text-lg font-light leading-10 pt-12'>
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
          <div className='flex w-full justify-start items-center'>
            <img
              className='h-44 w-auto'
              src={placeholderLogo}
              alt='night vale city council approves logo'
            />
            <img
              className='h-32 w-auto'
              src={placeHolderRadio}
              alt='night vale community radio sponsor logo'
            />
            <img
              className='h-32 w-auto'
              src={placeHolderSheriff}
              alt="sheriff's secret police logo"
            />
          </div>
          <div>legal information below.</div>
        </div>
      </div>
    </section>
  );
}

export default SplashFooter;

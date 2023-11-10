import { useState } from 'react';
import placeholderLogo from '../assets/placeholder.webp';
import placeHolderRadio from '../assets/placeholder_radio.png';
import placeHolderSheriff from '../assets/placeholder_sheriff.png';
import expandArrow from '../assets/expand_arrow.svg';

function SplashFooter() {
  const accordionData = [
    {
      title: 'Pay the Price for the Meal Deal',
      content: `You must ask for this offer while available. If you do not ask,
        you will be charged a fee for stewed tomatoes according to the
        standard income sliding scale for stewed tomatoes. This offer is
        only available at Big Rico's Pizza. There may be an extra charge
        depending on toppings, customizations, and sauces.`,
      isOpen: true,
    },
    {
      title: 'Carryout Options',
      content: `You must explicitly and clearly request carryout. If you do not,
        you will be chained to the table and forced to eat your meal in
        the restaurant. This is in accordance with City Council
        requirements.`,
      isOpen: false,
    },
    {
      title: 'Allergen Warning',
      content: `Wheat and Wheat By-Products are a dangerous material and are
        banned by the City Council. We cannot serve you Wheat or Wheat
        By-Products and you will not find any Wheat or Wheat By-Products
        on the premises. We offer gluten free pizza, stewed tomatoes,
        melted cheeses, and other delicious dishes in place of our
        original pizza. Please do not ask for pizza containing Wheat or
        Wheat By-Products as this may result in your immediate arrest
        and subsequent quarentine.`,
      isOpen: false,
    },
  ];

  const [accordions, updateAccordions] = useState(accordionData);

  const toggleAccordion = (title: string) => {
    const updatedAccordions = accordions.map((accordion) => {
      if (accordion.title === title) {
        return {
          ...accordion,
          isOpen: !accordion.isOpen,
        };
      }
      return accordion;
    });

    updateAccordions(updatedAccordions);
  };

  return (
    <section className='mt-4'>
      <div className='bg-light-grey text-dark-grey flex justify-center items center py-16'>
        <div className='w-8/12 flex flex-col items-center justify-between'>
          <div className='w-full flex justify-between text-sm font-light leading-8'>
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
          <div className='flex flex-col w-full'>
            {accordions.map((accordion, i) => (
              <div
                key={accordion.title}
                onClick={() => toggleAccordion(accordion.title)}>
                <h6
                  className='w-full my-2'
                  key={accordion.title}
                  id={`accordion-header-${i}`}>
                  <button
                    className='flex items-center justify-start font-bold'
                    aria-contols={`accordion-panel-${i}`}>
                    {accordion.title}
                    <img
                      className='h-4 w-auto ml-2'
                      src={expandArrow}
                      alt='arrow'
                    />
                  </button>
                </h6>
                <div
                  className={`${
                    accordion.isOpen ? 'max-h-30' : 'max-h-0 collapse'
                  } transition-[max-height] duration-150 ease-in-out`}
                  aria-expanded={accordion.isOpen}
                  aria-labelledby={`accordion-header-${i}`}>
                  {accordion.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplashFooter;

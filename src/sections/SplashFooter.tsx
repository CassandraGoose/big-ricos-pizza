import { useState } from 'react';
import placeholderLogo from '../assets/placeholder.webp';
import placeHolderRadio from '../assets/placeholder_radio.png';
import placeHolderSheriff from '../assets/placeholder_sheriff.png';
import Accordion from '../components/Accordion';

function SplashFooter() {
  const legalAccordionData = [
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

  const linkAccordionData = [
    {
      title: 'Our Company',
      content: () => (
        <>
          <li>Corporate</li>
          <li>Jobs</li>
          <li>About Big Rico's</li>
        </>
      ),
      isOpen: false,
    },
    {
      title: 'Our Pizza',
      content: () => (
        <>
          <li>Nutrition</li>
          <li>Allergen Info</li>
          <li>Gluten Free Warning</li>
          <li>Ingredients</li>
        </>
      ),
      isOpen: false,
    },
    {
      title: 'Additional Services',
      content: () => (
        <>
          <li>Smart Slice School Lunch</li>
          <li>Large Business Orders</li>
          <li>Wedding Registry</li>
          <li>Fundraising</li>
          <li>Gift Cards</li>
          <li>Real Estate</li>
          <li>Recycling</li>
        </>
      ),
      isOpen: false,
    },
    {
      title: 'Customer Service',
      content: () => (
        <>
          <li>Customer Support</li>
          <li>Do Not Sell/Share My Info</li>
          <li>Email & Text Offers</li>
          <li>Carryout Insurance</li>
          <li>Privacy</li>
          <li>Legal</li>
          <li>español</li>
        </>
      ),
      isOpen: false,
    },
  ];

  const [legalAccordions, updateLegalAccordions] = useState(legalAccordionData);
  const [linkAccordions, updateLinkAccordions] = useState(linkAccordionData);

  return (
    <section className='mt-4'>
      <div className='bg-light-grey text-dark-grey flex justify-center items center md:py-16'>
        <div className='md:w-8/12 w-full flex flex-col items-center justify-between'>
          <div className='w-full md:hidden flex flex-col justify-between font-light leading-8 bg-mid-grey'>
            {linkAccordions.map((accordion, i) => (
              <span key={accordion.title} className='border-b border-grey px-4'>
                <Accordion
                  children={<ul>{accordion.content()}</ul>}
                  accordion={accordion}
                  accordions={linkAccordions}
                  updateAccordions={updateLinkAccordions}
                  i={i}
                />
              </span>
            ))}
          </div>
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
            {legalAccordions.map((accordion, i) => (
              <Accordion
                key={accordion.title}
                children={<div>{accordion.content}</div>}
                accordion={accordion}
                accordions={legalAccordions}
                updateAccordions={updateLegalAccordions}
                i={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplashFooter;

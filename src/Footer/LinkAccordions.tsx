import { useState } from 'react';
import Accordion from './Accordion';

function SplashFooterAccordions() {
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

  const [linkAccordions, updateLinkAccordions] = useState(linkAccordionData);

  return(<div className='w-full md:hidden flex flex-col justify-between font-light leading-8 bg-mid-grey'>
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
</div>)
}

export default SplashFooterAccordions;

import { useState } from 'react';
import Accordion from './Accordion';

function SplashFooterAccordions() {
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

  const [legalAccordions, updateLegalAccordions] = useState(legalAccordionData);

  return(<div className='flex flex-col w-full'>
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
</div>);
}

export default SplashFooterAccordions;

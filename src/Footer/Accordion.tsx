import expandArrow from '../assets/icons/expand_arrow.svg';

interface Accordion {
  title: string;
  content: string | (() => JSX.Element);
  isOpen: boolean;
}

function Accordion({
  children,
  accordion,
  accordions,
  updateAccordions,
  i,
}: {
  children: JSX.Element;
  accordion: Accordion;
  accordions: Accordion[];
  updateAccordions: (accordions: Accordion[]) => Accordion[];
  i: number;
}) {
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
    <div onClick={() => toggleAccordion(accordion.title)}>
      <h6
        className='w-full my-2'
        key={accordion.title}
        id={`accordion-header-${i}`}>
        <button className='flex items-center justify-start font-bold'>
          {accordion.title}
          <img
            className={`h-4 w-auto ml-2 ${
              accordion.isOpen ? 'rotate-90' : ''
            } transition-all duration-300 ease-in`}
            src={expandArrow}
            alt='arrow'
          />
        </button>
      </h6>
      <div
        className={`transition-[max-height] duration-300 ease-in ${
          accordion.isOpen ? 'max-h-60' : 'max-h-0 collapse'
        }`}
        aria-expanded={accordion.isOpen}
        aria-labelledby={`accordion-header-${i}`}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;

import expandArrow from "../assets/icons/expand_arrow.svg";

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
      <h6 className="w-full my-2" key={accordion.title}>
        <button
          className="flex items-center justify-start font-bold"
          id={`accordion-title-${i}`}
          aria-controls={`accordion-content-${i}`}
          aria-expanded={accordion.isOpen}
          type="button"
        >
          {accordion.title}
          <img
            className={`h-4 w-auto ml-2 ${
              accordion.isOpen ? "rotate-90" : ""
            } transition-all duration-300 ease-in`}
            src={expandArrow}
            alt="arrow"
          />
        </button>
      </h6>
      <div
        id={`accordion-content-${i}`}
        className={`transition-[max-height] duration-300 ease-in ${
          accordion.isOpen ? "max-h-60" : "max-h-0 collapse"
        }`}
        aria-labelledby={`accordion-title-${i}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;

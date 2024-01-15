import FakeButton from "../../components/FakeButton";

function ComboDeal() {
  return (
    <section className="col-start-7 row-start-3 row-end-5 col-end-11 flex flex-col justify-between bg-combo-deal bg-cover bg-center p-2">
      <div className="w-1/2 flex">
        <span className="block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-r-[0.75rem] border-l-0 border-t-transparent border-b-transparent border-l-transparent border-r-white"></span>
        <p className="flex flex-col justify-center items-center bg-white text-blue px-3 py-1 text-base whitespace-nowrap">
          Combo Deal
        </p>
        <span className="block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-l-[0.75rem] border-r-0 border-t-transparent border-b-transparent border-r-transparent border-l-white"></span>
      </div>
      <p className="text-xl text-white text-shadow">
        Buy one handful of <span className=" italic">stewed tomatoes</span>, get
        one free!
      </p>
      <div className="flex lg:justify-end ">
        <div className="grid grid-col-3 grid-row-1 lg:w-1/3 w-1/2">
          <span className="custom-outline text-white text-4xl col-start-1 row-start-1 font-bold">
            $
          </span>
          <span className="custom-outline-shadow text-white text-4xl col-start-1 row-start-1 font-bold">
            $
          </span>
          <span className="custom-outline text-white text-6xl col-start-2 col-end-3 row-start-1 font-bold">
            5
          </span>
          <span
            className="custom-outline-shadow text-white text-6xl col-start-2 col-end-3 row-start-1 font-bold"
            aria-hidden="true"
          >
            5
          </span>
          <span className="custom-outline text-white text-4xl col-start-3 col-end-4 row-start-1 font-bold">
            99
          </span>
          <span
            className="custom-outline-shadow text-white text-4xl col-start-3 col-end-4 row-start-1 font-bold"
            aria-hidden="true"
          >
            99
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-white text-xxs drop-shadow normal-case w-1/2">
          Gluten Free Pizza not included. Bowls of cheese not included. No
          substitutions permitted.
        </p>
        <FakeButton text="Order Now" bgColor="red" xPadding="2" nextPage="restaurants" />
      </div>
    </section>
  );
}

export default ComboDeal;

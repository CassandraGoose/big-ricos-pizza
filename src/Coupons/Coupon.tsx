import FakeButton from '../components/FakeButton';

function Coupon({ specialInfo, dealTitle, cost }: { specialInfo: JSX.Element, dealTitle: string,  cost: JSX.Element }) {
  return (
    <div className="grid grid-row-4 md:grid-cols-[30%_35%_35%] sm:grid-cols-[25%_30%_45%] bg-carryout-deal bg-[center_bottom_32rem] text-white">
      <div className="row-start-1 col-start-1 col-span-2 row-span-3 uppercase flex flex-col justify-start items-start p-2">
        <div className="flex">
          <span className="block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-r-[0.5rem] border-l-0 border-t-transparent border-b-transparent border-l-transparent border-r-white"></span>
          <p className="flex justify-center items-center bg-white text-blue px-4 md:text-md text-sm font-medium">
            {dealTitle}
          </p>
          <span className="block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-l-[0.5rem] border-r-0 border-t-transparent border-b-transparent border-r-transparent border-l-white"></span>
        </div>
        <div className="h-28">
        {specialInfo}
        </div>
      </div>
      <p className="col-start-1 col-end-3 row-start-4 md:text-xxs text-xxxs normal-case drop-shadow p-2">
        This deal stricly adheres to the City Council's permanent ban on Wheat
        and Wheat By-Products. We do not serve Wheat and Wheat By-Products.
        There are no Wheat and Wheat By-Products on the premises of Big Rico's
        Pizza
      </p>
      <div className="col-start-3 row-start-2 row-end-5 flex flex-col p-2">
        {cost}
      </div>
      <div className="col-start-3 row-start-4 w-full flex justify-center items-center">
        <FakeButton text="Order Now" xPadding="8" bgColor="red" nextPage="/restaurants" />
      </div>
      
    </div>
  );
}

export default Coupon;

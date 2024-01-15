import FakeButton from '../components/FakeButton';

function Coupon({ specialInfo, dealTitle, cost }: { specialInfo: JSX.Element, dealTitle: string,  cost: JSX.Element }) {
  return (
    <div className="grid grid-row-6 grid-cols-[30%_35%_35%] bg-deals bg-fit bg-cover bg-right-2 text-white">
      <div className="row-start-1 col-start-1 col-end-1 row-span-5 uppercase flex flex-col justify-center items-center p-2">
        <div className="flex">
          <span className="block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-r-[0.5rem] border-l-0 border-t-transparent border-b-transparent border-l-transparent border-r-white"></span>
          <p className="flex justify-center items-center bg-white text-blue px-4 text-md font-medium">
            {dealTitle}
          </p>
          <span className="block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-l-[0.5rem] border-r-0 border-t-transparent border-b-transparent border-r-transparent border-l-white"></span>
        </div>
        {specialInfo}
      </div>
      <div className="col-start-3 row-start-2 flex flex-col p-2">
        {cost}
        <div className="w-full flex justify-center items-center">
          <FakeButton text="Order Now" xPadding="8" bgColor="red" nextPage="/restaurants" />
        </div>
      </div>
      <p className="col-start-1 col-end-4 row-start-6 text-xxs normal-case drop-shadow p-2">
        This deal stricly adheres to the City Council's permanent ban on Wheat
        and Wheat By-Products. We do not serve Wheat and Wheat By-Products.
        There are no Wheat and Wheat By-Products on the premises of Big Rico's
        Pizza
      </p>
    </div>
  );
}

export default Coupon;

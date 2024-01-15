import { useContext } from "react";
import ModalContext from "../../Context/ModalContext";
import ComingSoon from "../../ComingSoon";
import Pizza from "../../assets/content/menu_item_pizza.webp";
import Cheese from "../../assets/content/cheese.webp";
import Drinks from "../../assets/content/drinks.webp";

function Rewards() {
  const { setModalVisible, setModalContent } = useContext(ModalContext);

  return (
    <section className="row-start-1 row-end-3 col-start-7 col-end-11 border border-light-grey flex flex-col">
      <div className="grid grid-cols-3 items-center mt-1">
        <div className="flex">
          <div className="col-span-1 bg-red text-white flex items-center px-4 py-1 xl:text-2xl lg:text-xl text-md shadow-lg shadow-red/50">
            New
          </div>
          <div>
            <span className="block w-0 h-0 border-solid border-t-0 border-l-[1.35rem] border-b-[1.35rem] border-r-0 border-t-transparent border-l-red border-b-transparent border-r-transparent"></span>
            <span className="block w-0 h-0 border-solid border-t-0 border-b-[1.35rem] border-r-[1.35rem] border-l-0 border-l-transparent border-t-transparent border-r-transparent border-b-red"></span>
          </div>
        </div>
        <div className="col-start-2 col-end-4 text-blue flex flex-col justify-center items-center xl:text-4xl lg:text-3xl md:text-2xl text-xl font-medium">
          <span className="tracking-widest text-base">Big Rico's</span>Rewards
        </div>
      </div>
      <div className="grid grid-rows-7 grid-cols-3 mt-2">
        <div className="flex flex-col justify-center items-center col-span-2 row-span-2">
          <div className="lg:text-lg xl:text-2xl md:text-md text-sm text-blue">
            Now, earn <span className="text-red">free</span> Rico's
          </div>
          <div className="tracking-widest text-base text-dark-blue lg:text-sm text-xs lg:tracking-widest md:tracking-wider ">
            every 2 orders
          </div>
        </div>
        <div className="col-start-3 row-span-2">
          <button
            className="2xl:px-5 lg:py-3 lg:px-3 md:py-2 md:px-2 bg-red whitespace-nowrap text-white xl:text-xl lg:text-lg md:text-md text-sm uppercase rounded-sm"
            onClick={() => {
              setModalContent(<ComingSoon />);
              setModalVisible(true);
            }}
          >
            Join Now
          </button>
        </div>
        <div className="col-start-1 col-end-4 row-start-3 row-end-6 flex justify-around items-center h-24">
          <img
            className="xl:w-24 lg:w-20 md:w-16 w-24 h-auto"
            src={Cheese}
            alt="bowl of melted cheese"
          />
          <img
            className="xl:w-24 lg:w-20 md:w-16 w-24 h-auto"
            src={Drinks}
            alt="two drinks"
          />
          <img
            className="xl:w-24 lg:w-20 md:w-16 w-24 h-auto"
            src={Pizza}
            alt="gluten free pizza"
          />
        </div>
        <div className="col-start-1 col-end-4 row-start-5 row-end-7 flex justify-around items-center z-10">
          <div className="bg-white rounded-full flex flex-col justify-center items-center h-12 w-12 shadow-deep border border-light-grey">
            <div className="bg-white rounded-full flex flex-col justify-center items-center h-10 w-10 shadow-md border border-light-grey">
              <div className="flex flex-col justify-center items-center h-8 w-8 text-red">
                <span className="text-lg leading-none">20</span>
                <span className="text-xxxs">points</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-full flex flex-col justify-center items-center h-12 w-12 shadow-deep border border-light-grey">
            <div className="bg-white rounded-full flex flex-col justify-center items-center h-10 w-10 shadow-md border border-light-grey">
              <div className="flex flex-col justify-center items-center h-8 w-8 text-red">
                <span className="text-lg leading-none">40</span>
                <span className="text-xxxs">points</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-full flex flex-col justify-center items-center h-12 w-12 shadow-deep border border-light-grey">
            <div className="bg-white rounded-full flex flex-col justify-center items-center h-10 w-10 shadow-md border border-light-grey">
              <div className="flex flex-col justify-center items-center h-8 w-8 text-red">
                <span className="text-lg leading-none">60</span>
                <span className="text-xxxs">points</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-4 row-start-5 row-end-7 flex items-center">
          <div className="h-6 bg-gradient-to-r from-blue to-red border-4 border-white border-l-0 rounded-r-md w-[95%] shadow-deep"></div>
        </div>
      </div>
      <p className="text-xxs normal-case">
        See Big Rico's <span>Terms & Conditions.</span>
      </p>
    </section>
  );
}

export default Rewards;

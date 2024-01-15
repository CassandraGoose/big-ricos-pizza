import StartOrder from "../components/StartOrder";
import Coupon from "./Coupon";

function Coupons() {
  const coupons = [
    {
      dealTitle: "Big Deal",
      specialInfo: () => (
        <>
          <p className="xl:text-2xl lg:text-xl text-md font-medium text-shadow text-center">
            Pay the normal price
          </p>
          <div className="flex flex-col justify-center items-center">
          <p className="text-md tracking-widester text-shadow">including</p>
          <div className="flex drop-shadow-lg">
            <div>
              <span className="block w-0 h-0 border-solid border-t-0 border-r-[1rem] border-b-[1rem] border-l-0 border-t-transparent border-r-red border-b-transparent border-l-transparent"></span>
              <span className="block w-0 h-0 border-solid border-t-0 border-b-[1rem] border-l-[1rem] border-r-0 border-r-transparent border-t-transparent border-l-transparent border-b-red"></span>
            </div>
            <p className="flex justify-center items-center bg-red px-4 xl:text-lg text-md">
              <span className="text-shadow italic">New</span>
              &nbsp;&nbsp;Stewed
            </p>
            <div>
              <span className="block w-0 h-0 border-solid border-t-0 border-l-[1rem] border-b-[1rem] border-r-0 border-t-transparent border-l-red border-b-transparent border-r-transparent"></span>
              <span className="block w-0 h-0 border-solid border-t-0 border-b-[1rem] border-r-[1rem] border-l-0 border-l-transparent border-t-transparent border-r-transparent border-b-red"></span>
            </div>
          </div>
          <p className="xl:text-lg xl:tracking-widester text-md tracking-wider">tomatoes</p>
          </div>
        </>
      ),
      cost: () => (
        <div className="grid grid-col-5 grid-row-2 w-1/2 xl:text-6xl md:text-4xl">
          <span className="custom-outline text-white col-start-1 row-start-1 font-bold">
            $
          </span>
          <span
            className="custom-outline-shadow text-white col-start-1 row-start-1 font-bold"
            aria-hidden="true"
          >
            $
          </span>
          <span className="custom-outline text-white xl:text-9xl text-8xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-1rem]">
            9
          </span>
          <span
            className="custom-outline-shadow text-white xl:text-9xl text-8xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-1rem]"
            aria-hidden="true"
          >
            9
          </span>
          <span className="custom-outline text-white col-start-3 col-end-5 row-start-1 font-bold">
            99
          </span>
          <span
            className="custom-outline-shadow text-white col-start-3 col-end-5 row-start-1 font-bold"
            aria-hidden="true"
          >
            99
          </span>
          <p className="col-start-3 col-end-4 row-start-2 text-white text-shadow normal-case italic xl:text-3xl lg:text-2xl text-xl tracking-wider font-crimson">
            each
          </p>
        </div>
      ),
    },
    {
      dealTitle: "Combo Deal",
      specialInfo: () => (
        <p className="xl:text-2xl lg:text-xl md:text-lg text-sm font-medium text-shadow text-center">
          Buy one handful of stewed tomatoes, get one free!
        </p>
      ),
      cost: () => (
        <div className="grid grid-col-5 grid-row-2 w-1/2 xl:text-6xl md:text-4xl">
          <span className="custom-outline text-white col-start-1 row-start-1 font-bold">
            $
          </span>
          <span
            className="custom-outline-shadow text-white col-start-1 row-start-1 font-bold"
            aria-hidden="true"
          >
            $
          </span>
          <span className="custom-outline text-white xl:text-9xl text-8xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-1rem]">
            5
          </span>
          <span
            className="custom-outline-shadow text-white xl:text-9xl text-8xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-1rem]"
            aria-hidden="true"
          >
            5
          </span>
          <span className="custom-outline text-white col-start-3 col-end-5 row-start-1 font-bold">
            99
          </span>
          <span
            className="custom-outline-shadow text-white col-start-3 col-end-5 row-start-1 font-bold"
            aria-hidden="true"
          >
            99
          </span>
          <p className="col-start-3 col-end-4 row-start-2 text-white text-shadow normal-case italic xl:text-3xl lg:text-2xl text-xl tracking-wider font-crimson">
            each
          </p>
        </div>
      ),
    },
    {
      dealTitle: "9.99 Deal",
      specialInfo: () => (
        <p className="xl:text-2xl lg:text-xl md:text-lg text-sm  text-white text-shadow font-medium">
          All 1 Topping Gluten-Free Pizzas or stewed tomatoes or bowls of cheese
        </p>
      ),
      cost: () => (
        <div className="grid grid-col-5 grid-row-2 w-1/2 xl:text-6xl text-4xl">
          <span className="custom-outline text-white col-start-1 row-start-1 font-bold">
            $
          </span>
          <span
            className="custom-outline-shadow text-white col-start-1 row-start-1 font-bold"
            aria-hidden="true"
          >
            $
          </span>
          <span className="custom-outline text-white xl:text-9xl text-8xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-1rem]">
            9
          </span>
          <span
            className="custom-outline-shadow text-white xl:text-9xl text-8xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-1rem]"
            aria-hidden="true"
          >
            9
          </span>
          <span className="custom-outline text-white col-start-3 col-end-5 row-start-1 font-bold">
            99
          </span>
          <span
            className="custom-outline-shadow text-white col-start-3 col-end-5 row-start-1 font-bold"
            aria-hidden="true"
          >
            99
          </span>
          <p className="col-start-3 col-end-4 row-start-2 text-white text-shadow normal-case italic xl:text-3xl lg:text-2xl text-xl tracking-wider font-crimson">
            each
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center mt-2">
      <div className="md:w-3/4 w-full self-center flex justify-center items-center">
        <StartOrder />
      </div>
      <div className="md:w-1/2 w-11/12 flex flex-col mt-4">
        <h1 className="text-4xl font-bold text-dark-grey uppercase self-start">
          Big Rico's Coupons
        </h1>
        <p>Choose from the best restaurant coupons, promo codes, and offers.</p>
        <div className="space-y-2">
          <div className="bg-blue text-white uppercase font-medium rounded-t p-1">
            Big Rico's Food Coupons
          </div>
          {coupons.map((coupon) => {
            return (
              <Coupon
                key={coupon.dealTitle}
                dealTitle={coupon.dealTitle}
                specialInfo={coupon.specialInfo()}
                cost={coupon.cost()}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Coupons;

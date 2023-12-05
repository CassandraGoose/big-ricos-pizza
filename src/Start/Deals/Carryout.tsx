import { Link } from 'react-router-dom';
import Button from "../../components/Button";

function Carrout() {
  return (
    <div className="col-span-10 bg-spread bg-cover bg-right-bottom flex p-2">
      <div className="w-2/3">
        <div className="w-1/2 flex">
          <span className="block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-r-[0.75rem] border-l-0 border-t-transparent border-b-transparent border-l-transparent border-r-white"></span>
          <p className="flex flex-col justify-center items-center bg-white text-blue px-3 py-1 text-base whitespace-nowrap">
            Combo Deal
          </p>
          <span className="block w-0 h-0 border-solid border-t-[1rem] border-b-[1rem] border-l-[0.75rem] border-r-0 border-t-transparent border-b-transparent border-r-transparent border-l-white"></span>
        </div>
        <p className="text-4xl text-white text-shadow font-medium">
          All 1 Topping Gluten-Free Pizzas
        </p>
        <div className="text-xl text-white text-shadow flex items-center">
          <p className="italic underline text-sm origin-center -rotate-12 text-shadow-none drop-shadow">
            or
          </p>
          &nbsp;stewed tomatoes&nbsp;
          <p className="italic underline text-sm origin-center -rotate-12 text-shadow-none drop-shadow">
            or
          </p>
          &nbsp;bowls of cheese
        </div>
        <p className="text-xxs text-white normal-case">
          Carryout Only. All pizzas are gluten free pizzas at Big Rico's Pizza.
          There is no wheat or wheat by-products on the premises.{" "}
        </p>
      </div>
      <div className="w-1/3 flex md:flex-row flex-col justify-between items-center">
        <div className="grid grid-col-3 grid-row-2 w-1/2">
          <span className="custom-outline text-white text-6xl col-start-1 row-start-1 font-bold">
            $
          </span>
          x
          <span className="custom-outline-shadow text-white text-6xl col-start-1 row-start-1 font-bold">
            $
          </span>
          <span className="custom-outline text-white text-8xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-0.5rem]">
            9
          </span>
          <span
            className="custom-outline-shadow text-white text-8xl col-start-2 col-end-3 row-start-1 row-end-3 font-bold mt-[-0.5rem]"
            aria-hidden="true"
          >
            9
          </span>
          <span className="custom-outline text-white text-6xl col-start-3 col-end-4 row-start-1 font-bold">
            99
          </span>
          <span
            className="custom-outline-shadow text-white text-6xl col-start-3 col-end-4 row-start-1 font-bold"
            aria-hidden="true"
          >
            99
          </span>
          <p className="col-start-3 col-end-4 row-start-2 text-white text-shadow normal-case italic text-2xl tracking-wider font-crimson">
            each
          </p>
        </div>
        <Link to={`restaurants`}>
          <Button text="Order Now" bgColor="red" xPadding="2" />
        </Link>
      </div>
    </div>
  );
}

export default Carrout;

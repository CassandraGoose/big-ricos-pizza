import { Link } from "react-router-dom";
import FakeButton from "../components/FakeButton";

function StartOrder() {
  return (
    <>
      <section className="hidden md:flex items-center justify-between my-8 w-8/12">
        <div aria-hidden="true" className="w-20 h-[2px] bg-light-grey"></div>
        <p className="text-2xl text-blue font-medium">Start your order</p>
        <div className="flex justify-center items-center">
          <FakeButton
            text="Delivery"
            xPadding="14"
            bgColor="red"
            nextPage="restaurants"
          />
          <p className="font-dm lowercase text-xl mx-4 text-blue">or</p>
          <FakeButton
            text="Carryout"
            xPadding="14"
            bgColor="red"
            nextPage="restaurants"
          />
        </div>
        <div aria-hidden="true" className="w-20 h-[2px] bg-light-grey"></div>
      </section>
      <div className="md:hidden my-2 mx-20 w-11/12">
        <Link to="restaurants" className="md:hidden w-full inline-block">
          <span className="w-full block bg-red text-white uppercase rounded-sm mt-2 text-2xl py-4 text-center">
            Order Online
          </span>
        </Link>
      </div>
    </>
  );
}

export default StartOrder;

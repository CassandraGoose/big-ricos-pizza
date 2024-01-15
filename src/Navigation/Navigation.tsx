import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ModalContext from "../Context/ModalContext";
import Logo from "../assets/icons/logo.webp";
import Cart from "../assets/icons/cart.svg";
import Hamburger from "./Hamburger";
import FreeRicos from "./FreeRicos";
import MobileLowerList from "./MobileLowerList";
import SignIn from "../SignIn";

function Navigation() {
  const { setModalVisible, setModalContent } = useContext(ModalContext);
  return (
    <nav className="bg-blue text-white flex md:flex-row flex-col justify-center items-center md:px-auto font-oswald shadow-lg shadow-dark-grey/50">
      <ul className="flex md:w-8/12 w-11/12 items-center justify-between uppercase md:h-20 h-14">
        <li className="md:hidden">
          <Hamburger />
        </li>
        <li className="cursor-pointer flex items-center justify-center">
          <NavLink to={`/`}>
            <img
              src={Logo}
              className="h-12 min-w-[40px]"
              alt="Definitely Big Ricos logo"
            />
          </NavLink>
        </li>
        <li className="md:flex items-center hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden">
          <NavLink to={`restaurants`}>
            <span className="h-full w-full p-4 flex items-center">
              Order
              <br />
              Online
            </span>
          </NavLink>
        </li>
        <li className="p-4 md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden">
          <NavLink to={`restaurants`}>Locations</NavLink>
        </li>
        <NavLink
          to={`menu`}
          className={({ isActive }) =>
            isActive ? "bg-dark-grey p-4 h-full flex items-center" : "p-4"
          }
        >
          <li className="md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden">
            Menu
          </li>
        </NavLink>
        <li className="md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden">
          <NavLink
            to={`coupons`}
            className={({ isActive }) =>
              isActive ? "bg-dark-grey p-4 h-full flex items-center" : "p-4"
            }
          >
            Coupons
          </NavLink>
        </li>
        <li className="md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden">
          <NavLink
            to={`tracker`}
            className={({ isActive }) =>
              isActive ? "bg-dark-grey p-4 h-full flex items-center" : "p-4"
            }
          >
            Tracker
          </NavLink>
        </li>
        <li className="md:flex items-center h-full hover:shadow-menu transition-shadow duration-300 ease-linear delay-0 cursor-pointer md:visible hidden">
          <NavLink
            to={`rewards`}
            className={({ isActive }) =>
              isActive ? "bg-dark-grey p-4 h-full flex items-center" : "p-4"
            }
          >
            Rewards
          </NavLink>
        </li>
        <li className="md:inline hidden">
          <FreeRicos light={false} />
        </li>
        <li className="text-sm md:flex flex-col items-center justify-center p-4 h-full bg-dark-blue cursor-pointer hidden ml-2">
          <span
            className="flex flex-col items-center"
            role="button"
            tabIndex={0}
            onClick={() => {
              setModalContent(<SignIn />);
              setModalVisible(true);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setModalContent(<SignIn />);
                setModalVisible(true);
              }
            }}
          >
            <span>Sign in & earn</span>
            <span>rewards</span>
          </span>
        </li>
        <li className="p-4 flex flex-col justify-center cursor-pointer">
          <span
            role="button"
            tabIndex={0}
            onClick={() => {
              setModalContent(<SignIn />);
              setModalVisible(true);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setModalContent(<SignIn />);
                setModalVisible(true);
              }
            }}
          >
            <img src={Cart} className="h-6" alt="cart icon" />
            <span>cart</span>
          </span>
        </li>
      </ul>
      <MobileLowerList />
    </nav>
  );
}

export default Navigation;

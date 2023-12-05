import { Link } from "react-router-dom";
import { useContext } from "react";
import ModalContext from "../Context/ModalContext";
import ComingSoon from "../ComingSoon";

function LowerMenu() {
  const { setModalVisible, setModalContent } = useContext(ModalContext);

  const delegatedClick = (e:React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    if (target.tagName === "LI") {
      setModalContent(<ComingSoon />);
      setModalVisible(true);
    }
  };

  return (
    <section className="flex justify-center items-center">
      <ul className="flex md:flex-row flex-col justify-around items-center w-8/12 my-16 uppercase font-medium text-blue text-lg leading-10 md:leading-none">
        <Link to={`restaurants`}>
          <li className="hidden md:inline cursor-pointer">Locations</li>
        </Link>
        <li className="cursor-pointer" onClick={(e) => delegatedClick(e)}>
          Email & Text Offers
        </li>
        <li className="cursor-pointer" onClick={(e) => delegatedClick(e)}>
          Gift Cards
        </li>
        <li
          className="cursor-pointer hidden md:inline"
          onClick={(e) => delegatedClick(e)}
        >
          Tracker
        </li>
        <li className="cursor-pointer" onClick={(e) => delegatedClick(e)}>
          Nutrition
        </li>
      </ul>
    </section>
  );
}

export default LowerMenu;

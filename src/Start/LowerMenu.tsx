import { Link } from "react-router-dom";
import { useContext } from "react";
import ModalContext from "../Context/ModalContext";
import ComingSoon from "../ComingSoon";

function LowerMenu() {
  const { setModalVisible, setModalContent } = useContext(ModalContext);

  const delegatedClick = (
    e: React.MouseEvent<HTMLLIElement> | React.MouseEvent<HTMLUListElement>
  ) => {
    const target = e.target as HTMLLIElement;
    if (target.tagName === "LI") {
      setModalContent(<ComingSoon />);
      setModalVisible(true);
    }
  };

  return (
    <section className="flex justify-center items-center">
      <ul
        className="flex md:flex-row flex-col justify-around items-center w-8/12 my-16 uppercase font-medium text-blue text-lg leading-10 md:leading-none"
        onClick={(e) => delegatedClick(e)}
      >
        <li className="hidden md:inline cursor-pointer">
          <Link to={`restaurants`}>Locations</Link>
        </li>
        <li className="cursor-pointer">Email & Text Offers</li>
        <li className="cursor-pointer">Gift Cards</li>
        <li className="cursor-pointer hidden md:inline">Tracker</li>
        <li className="cursor-pointer">Nutrition</li>
      </ul>
    </section>
  );
}

export default LowerMenu;

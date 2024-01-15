import { useContext } from "react";
import ModalContext from "../../Context/ModalContext";
import ComingSoon from "../../ComingSoon";

function Pause() {
  const { setModalVisible, setModalContent } = useContext(ModalContext);

  return (
    <section
      className="row-start-6 col-span-10 flex justify-center cursor-pointer"
    >
      <button className="bg-blue rounded-full border-solid border-white border-4 shadow-lg shadow-dark-grey/50 h-9 w-9 flex items-center justify-center" onClick={() => {
        setModalContent(<ComingSoon />);
        setModalVisible(true);
      }}>
        <div className="bg-white rounded-[2px] h-3 w-1.5 mr-[2px]"></div>
        <div className="bg-white rounded-[2px] h-3 w-1.5"></div>
      </button>
    </section>
  );
}

export default Pause;

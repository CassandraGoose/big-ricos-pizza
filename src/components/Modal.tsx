import { useContext } from "react";
import ModalContext from "../Context/ModalContext";
import x from "../assets/icons/x.svg";

function Modal() {
  const { setModalVisible, modalContent } = useContext(ModalContext);

  return (
    <section className="z-50 fixed inset-0 flex justify-center items-center h-full w-screen bg-white/[0.7]">
      <div className="flex flex-col h-5/6 w-5/12 overflow-y-auto bg-white border border-light-grey p-2 rounded">
        <button className="self-end" onClick={() => setModalVisible(false)}>
          <img className="w-4 h-4 m-2" src={x} alt="x to close" />
        </button>
        {modalContent}
      </div>
    </section>
  );
}

export default Modal;

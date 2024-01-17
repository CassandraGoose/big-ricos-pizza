import { useContext, useEffect, useRef } from "react";
import ModalContext from "../Context/ModalContext";
import x from "../assets/icons/x.svg";

function Modal() {
  const { setModalVisible, modalContent } = useContext(ModalContext);

  useEffect(() => {
    document.addEventListener("keydown", keyboardListener);

    return () => document.removeEventListener("keydown", keyboardListener);
  });

  const modalRef = useRef<HTMLDivElement>(null);

  const keyboardListener = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setModalVisible(false);
    } else if (e.key === "Tab") {
      const focusableElement = modalRef.current!.querySelectorAll("button");
      if (document.activeElement !== focusableElement[0]) {
        focusableElement[0].focus();
        return e.preventDefault();
      }
    }
  };

  return (
    <section
      className="z-50 fixed inset-0 flex justify-center items-center h-full w-screen bg-white/[0.7]"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="flex flex-col h-5/6 w-5/12 overflow-y-auto bg-white border border-light-grey p-2 rounded"
        ref={modalRef}
      >
        <button
          className="self-end"
          onClick={() => setModalVisible(false)}
          onKeyDown={(e) => {
            e.key === "Enter" ? setModalVisible(false) : null;
          }}
        >
          <img className="w-4 h-4 m-2" src={x} alt="x to close" />
        </button>
        {modalContent}
      </div>
    </section>
  );
}

export default Modal;

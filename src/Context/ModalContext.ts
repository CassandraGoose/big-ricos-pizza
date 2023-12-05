import { createContext, Dispatch, SetStateAction, ReactNode } from 'react';

const ModalContext = createContext<{
  modalVisible: boolean;
  modalContent: ReactNode;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setModalContent: Dispatch<SetStateAction<ReactNode>>;
}>({
  modalVisible: false,
  modalContent: "something went wrong",
  setModalVisible: () => {},
  setModalContent: () => {},
});

export default ModalContext;

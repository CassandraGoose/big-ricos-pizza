import { createContext, Dispatch, SetStateAction } from 'react';

const ModalContext = createContext<{
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}>({
  modalVisible: false,
  setModalVisible: () => {},
});

export default ModalContext;

import { ReactNode, useState } from 'react';
import ModalContext from './ModalContext';

function ModalContextProvider({ children }: { children: ReactNode }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  return (
    <ModalContext.Provider value={{ modalVisible, setModalVisible, modalContent, setModalContent }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;

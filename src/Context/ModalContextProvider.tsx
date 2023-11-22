import { ReactNode, useState } from 'react';
import ModalContext from './ModalContext';

function ModalContextProvider({ children }: { children: ReactNode }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ModalContext.Provider value={{ modalVisible, setModalVisible }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;

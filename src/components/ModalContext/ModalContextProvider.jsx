import { createContext, useContext, useState, useCallback } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const ModalContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpenModal, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

import { createContext, useContext, useState, useCallback } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const ModalContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpen] = useState(false);
  const [modalName, setModalName] = useState("");

  const openModal = useCallback((name) => {
    setModalName(name);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalName("");
  }, []);

  return (
    <ModalContext.Provider value={{ modalName, isOpenModal, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

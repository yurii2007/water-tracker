import { createPortal } from "react-dom";

import { useCallback, useEffect } from "react";

import { useModal } from "../ModalContext/ModalContextProvider";

import OverlayStyle from "./Overlay.styled";

const Overlay = ({ modal, modalProps = {} }) => {
  const { isOpenModal, closeModal } = useModal();

  const backdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) closeModal();
    },
    [closeModal]
  );

  const handleKeyDown = useCallback(
    (e) => {
      console.log(e.code);
      if (e.code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpenModal) {
      document.addEventListener("keydown", handleKeyDown);
    }
    if (!isOpenModal) {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [handleKeyDown, isOpenModal]);

  if (!isOpenModal) {
    return null;
  }

  if (!modal) {
    throw new Error(
      "Передайте правильно модальне вікно, як показано в components/Overlay/Example/ModalRenderExample.jsx"
    );
  }

  return createPortal(
    <OverlayStyle onClick={backdropClick}>
      {modal({ ...modalProps, closeModal })}
    </OverlayStyle>,
    document.body
  );
};

export default Overlay;

import { createPortal } from "react-dom";
import { useEffect } from "react";

import { useModal } from "../ModalContext/ModalContextProvider";

import { OverlayStyle, LogoModalStyles } from "./Overlay.styled";

const Overlay = ({ children }) => {
  const toggleModal = useModal();

  const backdropClick = (e) => {
    if (e.target === e.currentTarget) toggleModal();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    // modalName === "logoModal" ? (
    //   <LogoModalStyles onClick={backdropClick}>{children}</LogoModalStyles>
    // ) : (
    <OverlayStyle onClick={backdropClick}>{children}</OverlayStyle>,
    document.body
  );
};

export default Overlay;

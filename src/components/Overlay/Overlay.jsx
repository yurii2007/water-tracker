import { createPortal } from "react-dom";
import { useEffect } from "react";

import { useModal } from "../ModalContext/ModalContextProvider";

import { OverlayStyle } from "./Overlay.styled";
import ModalBox from "../shared/ModalBox/ModalBox";

const Overlay = ({ children }) => {
  const toggleModal = useModal();

  const backdropClick = (e) => {
    if (e.target === e.currentTarget) toggleModal();
  };

  useEffect(() => {
    // Handle keydown event to close modal on 'Escape' key press
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    // Disable scrolling on the body when the modal is active
    document.body.style.overflow = "hidden";

    // Add event listener for the 'Escape' keydown event
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // Re-enable scrolling on the body when the modal is closed
      document.body.style.overflow = "auto";

      // Remove the 'Escape' keydown event listener
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <OverlayStyle $isLogoModal={children.props.isLogoModal} onClick={backdropClick}>
      {children.props.isLogoModal ? (
        children
      ) : (
        <ModalBox {...children.props}>{children}</ModalBox>
      )}
    </OverlayStyle>,
    document.body
  );
};

export default Overlay;

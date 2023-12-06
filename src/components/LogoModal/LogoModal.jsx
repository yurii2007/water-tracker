import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Div } from "./LogoModal.styled";

export default function ModalForm({
  children = "",
  handleBackdropClick = () => {},
  handleKeyDown = () => {},
  closeModal = () => {},
}) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [handleKeyDown]);

  return createPortal(
    <Div onClick={handleBackdropClick}>{children}</Div>,
    document.body
  );
}

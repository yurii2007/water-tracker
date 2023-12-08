import { useModal } from "../../ModalContext/ModalContextProvider";

import { ReactComponent as Close } from "../../../images/svg/x.svg";
import { HeaderWrapper } from "../../AddWaterModal/AddWaterModal.styled";

const ModalTitle = ({ title }) => {
  const toggleModal = useModal();
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <button onClick={() => toggleModal()}>
        <Close />
      </button>
    </HeaderWrapper>
  );
};

export default ModalTitle;

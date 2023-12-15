import { useModal } from "../../ModalContext/ModalContextProvider";

import { ReactComponent as CloseModalSvg } from "../../../images/svg/x.svg";
import { DivModalBox, DivTitleWrapper, Title } from "./ModalBox.styled";

const ModalBox = ({ children, title, size, isLogoModal = false }) => {
  const toggleModal = useModal();

  return (
    <DivModalBox $size={size}>
      {!isLogoModal && (
        <DivTitleWrapper>
          <Title>{title}</Title>
          <CloseModalSvg
            style={{ cursor: "pointer" }}
            onClick={() => toggleModal()}
          />
        </DivTitleWrapper>
      )}
      {children}
    </DivModalBox>
  );
};

export default ModalBox;

/* 
SIZES: 
logout && delete popup === small
dailyNorma && addWater && editWater === medium
setting === big
*/

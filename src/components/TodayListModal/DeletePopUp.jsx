import {
  BtnCancel,
  BtnDelete,
  ButtonWrapper,
  PopUp,
  PopUpHeader,
  StyledP,
} from "../TodayListModal/TodayListModal.styled";

import { useModal } from "../ModalContext/ModalContextProvider";

import { ReactComponent as CloseModalSvg } from "../../images/svg/x.svg";

const DeletePopUp = ({ deleteEntry }) => {
  const toggleModal = useModal();
  return (
    <PopUp>
      <PopUpHeader>
        <h2>Delete entry</h2>
        <CloseModalSvg
          style={{ cursor: "pointer" }}
          onClick={() => toggleModal()}
        />
      </PopUpHeader>
      <StyledP>Are you sure you want to delete the entry?</StyledP>
      <ButtonWrapper>
        <BtnCancel onClick={() => toggleModal()}>Cancel</BtnCancel>
        <BtnDelete onClick={deleteEntry}>Delete</BtnDelete>
      </ButtonWrapper>
    </PopUp>
  );
};

export default DeletePopUp;

import {
  BtnCancel,
  BtnDelete,
  ButtonWrapper,
  StyledP,
} from "../TodayListModal/TodayListModal.styled";

import { useModal } from "../ModalContext/ModalContextProvider";

const DeletePopUp = ({ deleteEntry }) => {
  const toggleModal = useModal();
  return (
    <>
      <StyledP>Are you sure you want to delete the entry?</StyledP>
      <ButtonWrapper>
        <BtnCancel onClick={() => toggleModal()}>Cancel</BtnCancel>
        <BtnDelete onClick={deleteEntry}>Delete</BtnDelete>
      </ButtonWrapper>
    </>
  );
};

export default DeletePopUp;

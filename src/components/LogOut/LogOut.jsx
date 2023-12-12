import { useDispatch } from "react-redux";

import { useModal } from "../ModalContext/ModalContextProvider";

import {
  Text,
  ButtonLogOut,
  ButtonCancel,
  ContainerButton,
} from "./LogOut.styled";
import { logOutThunk } from "../../redux/User/UserThunk";

const LogOut = () => {
  const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleLogout = () => {
    dispatch(logOutThunk());
    toggleModal();
  };

  return (
    <>
      <Text>Do you really want to leave?</Text>
      <ContainerButton>
        <ButtonLogOut type="button" onClick={handleLogout}>
          Log out
        </ButtonLogOut>
        <ButtonCancel type="button" onClick={() => toggleModal()}>
          Cancel
        </ButtonCancel>
      </ContainerButton>
    </>
  );
};

export default LogOut;

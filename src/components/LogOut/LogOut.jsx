import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Title,
  Text,
  ButtonLogOut,
  ButtonCancel,
  CrossIcon,
  ContainerButton,
} from "./LogOut.styled";
import { logOutThunk } from "../../redux/User/UserThunk";

const LogOut = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutThunk());
  };

  return (
    <Container>
      <Title>Log out</Title>
      <Text>Do you really want to leave?</Text>
      <ContainerButton>
        <ButtonLogOut type="button" onClick={handleLogout}>
          Log out
        </ButtonLogOut>
        <ButtonCancel type="button" onClick={closeModal}>
          Cancel
        </ButtonCancel>
      </ContainerButton>
      <CrossIcon onClick={closeModal} />
    </Container>
  );
};

export default LogOut;

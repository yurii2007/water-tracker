import { modalNames } from "../../constants/modals";
import { useModal } from "../ModalContext/ModalContextProvider";
import {
  LogOut,
  Setting,
  Container,
  Button,
  Text,
} from "./LogoModalContext.styled";

const LogoModalContext = () => {
  const { openModal } = useModal();

  return (
    <Container>
      <Button type="button" onClick={() => openModal(modalNames.settingModal)}>
        <Setting />
        <Text>Setting</Text>
      </Button>
      <Button type="button" onClick={() => openModal(modalNames.logout)}>
        <LogOut />
        <Text>Log out</Text>
      </Button>
    </Container>
  );
};

export default LogoModalContext;

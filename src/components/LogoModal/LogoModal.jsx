import { modalNames } from "../../constants/modals";
import { useModal } from "../ModalContext/ModalContextProvider";
import {
  LogOut,
  Setting,
  Container,
  Button,
  Text,
  ContainerWidth,
} from "./LogoModal.styled";

export const LogoModal = () => {
  const { openModal, closeModal } = useModal();

  return (
    <ContainerWidth onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Button
          type="button"
          onClick={() => openModal(modalNames.settingModal)}
        >
          <Setting />
          <Text>Setting</Text>
        </Button>
        <Button type="button" onClick={() => openModal(modalNames.logout)}>
          <LogOut />
          <Text>Log out</Text>
        </Button>
      </Container>
    </ContainerWidth>
  );
};

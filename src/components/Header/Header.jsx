import { useSelector } from "react-redux";

import {
  LogoDefault,
  UserIconDefault,
  HeaderSection,
  Text,
  Button,
  WrapperSecondary,
  LinkStyles,
  ArrowDown,
  UserName,
  UserLogo,
} from "./Header.styled";
import useToggleModal from "../../Helpers/useToggleModal";
import LogoModalContext from "../LogoModalContext/LogoModalContext";

import LogoModal from "../LogoModal/LogoModal";

const Header = () => {
  const isLogin = useSelector((state) => state.user.token);
  const IsName = useSelector((state) => state.user.user.name);
  const userLogo = useSelector((state) => state.user.user.avatar);

  const { isOpen, closeModal, openModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  const defaultName = "V";

  return (
    <HeaderSection>
      <LinkStyles to="/">
        <LogoDefault />
        <Text>tracker of water</Text>
      </LinkStyles>

      {isLogin ? (
        <WrapperSecondary
          onClick={() => {
            openModal();
          }}
        >
          <UserName>{IsName ? IsName : defaultName}</UserName>
          {userLogo ? <UserLogo /> : ""}
          <ArrowDown />
        </WrapperSecondary>
      ) : (
        <LinkStyles to="/signin">
          <WrapperSecondary>
            <Button type="button">Sign in</Button>
            <UserIconDefault />
          </WrapperSecondary>
        </LinkStyles>
      )}

      {isOpen && (
        <LogoModal
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <LogoModalContext />
        </LogoModal>
      )}
    </HeaderSection>
  );
};

export default Header;

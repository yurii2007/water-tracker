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
import { useModal } from "../ModalContext/ModalContextProvider";
import { modalNames } from "../../constants/modals";

const Header = () => {
  const isLogin = useSelector((state) => state.user.token);
  const IsName = useSelector((state) => state.user.user.name);
  const userLogo = useSelector((state) => state.user.user.avatar);

  const { openModal } = useModal();

  const defaultName = "V";

  return (
    <HeaderSection>
      <LinkStyles to="/">
        <LogoDefault />
        <Text>tracker of water</Text>
      </LinkStyles>

      {isLogin ? (
        <WrapperSecondary onClick={() => openModal(modalNames.logoModal)}>
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
    </HeaderSection>
  );
};

export default Header;

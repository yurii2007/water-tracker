import { useSelector } from "react-redux";

import { useModal } from "../ModalContext/ModalContextProvider";
import { selectIsLogin, selectIsName, selectUserLogo } from "../../redux/selectors";

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
import { LogoModal } from "../LogoModal/LogoModal";

const Header = () => {
  const toggleModal = useModal();

  const isLogin = useSelector(selectIsLogin);
  const isName = useSelector(selectIsName);
  const isUserLogo = useSelector(selectUserLogo);

  const defaultName = "V";

  return (
    <HeaderSection>
      <LinkStyles to="/">
        <LogoDefault />
        <Text>tracker of water</Text>
      </LinkStyles>

      {isLogin ? (
        <WrapperSecondary onClick={() => toggleModal(<LogoModal />)}>
          <UserName>{isName ? isName : defaultName}</UserName>
          {isUserLogo ? <UserLogo /> : ""}
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

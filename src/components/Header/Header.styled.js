import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../images/svg/logo.svg";
import { ReactComponent as UserIcon } from "../../images/svg/user_icon.svg";
import { ReactComponent as Arrow } from "../../images/svg/arrow_bottom.svg";

export const UserLogo = () => {
  const userLogo = useSelector((state) => state.user.user.avatar);
  const userName = useSelector((state) => state.user.user.name);

  return <UserImg src={userLogo} alt={userName} />;
};

const UserImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
`;

export const LinkStyles = styled(Link)`
  display: flex;
  align-items: center;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const HeaderSection = styled.header`
  margin: 0 auto;
  padding: 8px 20px 0;
  width: 320px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 768px;
    padding: 16px 32px 0;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 12px 112px 0;
  }
`;

export const LogoDefault = styled(Logo)`
  width: 40px;
  height: 48px;
`;

export const Text = styled.p`
  width: 58px;
  color: var(--primary-blue);
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const WrapperSecondary = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  & :nth-child(2) {
    margin-left: 8px;
  }

  & :nth-child(3) {
    margin-left: 4px;
  }
`;

export const Button = styled.button`
  width: 48px;
  background-color: transparent;
  color: var(--primary-blue);

  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  padding: 0;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 54px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const UserName = styled.p``;

export const UserIconDefault = styled(UserIcon)`
  width: 28px;
  height: 28px;
`;

export const ArrowDown = styled(Arrow)`
  width: 16px;
  height: 16px;
  fill: var(--primary-blue);
`;

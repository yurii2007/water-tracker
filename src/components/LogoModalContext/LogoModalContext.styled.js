import styled from "styled-components";

import { ReactComponent as SettingIcon } from "../../images/svg/settings_icon.svg";
import { ReactComponent as LogOutIcon } from "../../images/svg/logout_icon.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 118px;
  padding: 16px;
  gap: 16px;
  border-radius: 10px;
  background: var(--white-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  background-color: transparent;
  border: none;
  gap: 8px;
  padding: 0;
  cursor: pointer;
  align-items: center;
`;

export const Text = styled.p`
  color: var(--primary-blue);
`;

export const Setting = styled(SettingIcon)`
  width: 16px;
  height: 16px;
`;

export const LogOut = styled(LogOutIcon)`
  width: 16px;
  height: 16px;
`;

import styled from "styled-components";

import { ReactComponent as Cross } from "../../images/svg/x.svg";

export const Container = styled.div`
  position: relative;
  background-color: var(--white-color);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 592px;
  }
`;

export const Title = styled.h2`
  color: var(--primary-black);
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  cursor: context-menu;
`;

export const Text = styled.p`
  color: var(--primary-black);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  cursor: context-menu;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }

  @media (min-width: 1440px) {
    justify-content: flex-end;
  }
`;

export const ButtonLogOut = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: var(--secondary-red);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: var(--white-color);
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
  }
`;

export const ButtonCancel = styled.button`
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  background: var(--secondary-lightblue);
  color: var(--primary-blue);
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
  }
`;

export const CrossIcon = styled(Cross)`
  position: absolute;
  right: 24px;
  top: 36px;
  cursor: pointer;

  width: 24px;
  height: 24px;
`;

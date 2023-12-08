import styled from "styled-components";
import { ReactComponent as IncrementIcon } from "../../images/svg/plus.svg";
import { ReactComponent as DecrementIcon } from "../../images/svg/minus.svg";

export const StyledIncrementIcon = styled(IncrementIcon)`
  stroke: var(--primary-blue);
`;

export const StyledDecrementIcon = styled(DecrementIcon)`
  stroke: var(--primary-blue);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h3 {
    color: var(--primary-black);
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }

  button {
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    padding: 0;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  margin-bottom: 24px;

  button {
    width: 44px;
    height: 44px;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 30px;
    border: 1px solid var(--secondary-skyblue);
    background: var(--white-color);
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }

  span {
    width: 92px;
    height: 36px;
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    background: var(--secondary-lightblue);
    color: var(--primary-blue);

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`;

export const ValueText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
  color: var(--primary-black);
`;

export const AmountText = styled.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input,
  select {
    width: 100%;
    display: flex;
    padding: 12px 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 6px;
    border: 1px solid var(--secondary-lightblue);
    color: var(--primary-blue);
    margin-bottom: 24px;
    outline: none;
  }
`;

export const BtnSaveWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  align-items: center;

  p {
    color: var(--primary-blue);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  button {
    width: 160px;
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: none;
    background: var(--primary-blue);
    color: var(--white-color);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }
`;

export const ModalContainer = styled.div`
  background-color: var(--white-color);
  position: relative;
  width: 256px;
  display: flex;
  flex-direction: column;
  padding: 24px 12px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 592px;
  }
`;
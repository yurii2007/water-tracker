import styled from "styled-components";
import Notiflix from "notiflix";
import { createGlobalStyle } from "styled-components";
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
    cursor: pointer;
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
    cursor: pointer;
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

  input {
    width: 120px;
    display: flex;
    padding: 12px 10px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 6px;
    border: 1px solid var(--secondary-lightblue);
    color: var(--primary-blue);
    margin-bottom: 24px;
    outline: none;
    appearance: none;
  }

  label:nth-child(2) {
    color: var(--primary-black);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    input,
    select {
      width: 100%;
    }
  }
`;

export const BtnSaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  p {
    color: var(--primary-blue);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  button {
    width: 100%;
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
    cursor: pointer;
    transition: background-color var(--animation-transition),
      box-shadow var(--animation-transition);
  }
  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    justify-content: flex-end;

    button {
      width: 160px;
    }
  }
`;

export const ModalContainer = styled.div`
  background-color: var(--white-color);
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  position: relative;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`;

Notiflix.Notify.init({
  timeout: 2000,
  fontFamily: "Roboto",
  warning: {
    background: "#407bff",
    timeout: 8000,
    textColor: "#d7e3ff",
    childClassName: "notiflix-notify-warning",
    notiflixIconColor: "rgba(0,0,0,0.2)",
    fontAwesomeClassName: "fas fa-exclamation-circle",
    fontAwesomeIconColor: "rgba(0,0,0,0.2)",
    backOverlayColor: "rgba(238,191,49,0.2)",
  },
});

export const TitleWrapper = styled.input`
  position: relative;
  border: none;
  font-size: 18px;
  color: var(--white);
  background-color: transparent;
  padding-left: 20px;
  padding-bottom: 4.5px;
  cursor: pointer;
  &:focus-visible {
    outline: 0;
  }

  @media screen and (min-width: 768px) {
    height: 29px;
  }
`;

export const StyledDateWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid var(--transparency-60);
`;

export const TimeGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
  }

.react-datepicker-popper{
    position: absolute;
    inset: 0px auto auto 0px;
    transform: translate3d(-45px, 40px, 0px);
  }
  `;

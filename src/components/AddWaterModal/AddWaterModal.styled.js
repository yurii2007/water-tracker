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

Notiflix.Notify.init({
  timeout: 2000,
  fontFamily: "Roboto",
  warning: {
    background: "#ff9d43",
    timeout: 8000,
    textColor: "#ffffff",
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
`;

export const TimeGlobalStyles = createGlobalStyle`
  .react-datepicker-wrapper {
    position: relative;
     width: 100%;
  }

.react-datepicker__triangle {
    visibility: hidden;
  }

.react-datepicker.react-datepicker--time-only {
    position: absolute;
    font-size: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-1%, -10%);
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  background-color: var(--secondary-lightblue);
    font-family: Roboto;
    border-radius: 10px;
    border:1px solid var(--secondary-skyblue);
    color:var(--primary-blue)
  }

.react-datepicker__header.react-datepicker__header--time.react-datepicker__header--time--only{
  background-color: var(--primary-blue);
  color:var(--white-color);
}
.react-datepicker__header .react-datepicker-time__header{
  color:var(--white-color);
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar {
  width: 12px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-track {
  background-color: var(--secondary-lightblue)
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list::-webkit-scrollbar-thumb {
  background-color: var(--white-color);
  border-radius: 6px;
    background: var(--white-color);
    border: solid 1px var(--primary-blue);
    height: 20px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{
  background-color: var(--primary-blue) !important;
    color: var(--white-color);
    font-weight: bold;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{
      padding-left: 16px;
      border-left: 2px solid var(--secondary-yellow);
      transition: all 0.3s ease;
}
.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{
  transition: all 0.5s ease;
}
  `;

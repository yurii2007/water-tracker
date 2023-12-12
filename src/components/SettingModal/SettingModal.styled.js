import styled from "styled-components";

export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  div {
    display: flex;
    justify-content: center;

    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  img {
    border-radius: 50%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    color: var(--primary-blue);
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    border: none;
  }
`;

export const WrapperFormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormMainWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const LeftFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const RightFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  span {
    color: var(--primary-black);
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 8px;
  }

  input {
    display: flex;
    align-items: flex-start;
    height: 44px;
  }

  input,
  input:not(:placeholder-shown) {
    ${({ $error }) =>
      $error
        ? "border: 1px solid var(--secondary-red); color: var(--secondary-red)"
        : ""};
  }
`;

export const PasswordLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  span {
    color: var(--primary-black);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 8px;
  }
  input {
    display: flex;
    height: 44px;
    align-items: flex-start;
    width: 100%;
  }

  input,
  input:not(:placeholder-shown) {
    ${({ $error }) =>
      $error
        ? "border: 1px solid var(--secondary-red); color: var(--secondary-red)"
        : ""};
  }
`;

export const BtnSave = styled.button`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: var(--primery-color-white, #fff);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  border: none;
  background: var(--primery-color-blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  width: 100%;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;

export const BtnSaveWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const UpTitle = styled.h3`
  margin-bottom: 8px;
`;

export const ErrorPassText = styled.p`
  color: var(--secondary-red);
  font-size: 14px;
  line-height: 1.28;
`;

export const GenderBlock = styled.div`
  h3 {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

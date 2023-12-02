import styled from "styled-components";

export const ContainerSettings = styled.div`
  color: var(--primary-black);
  background-color: var(--white-color);
  width: 280px;
  padding: 32px 12px;
  border-radius: 10px;
  margin: 0 auto;

  h2 {
    color: var(--primary-black);
    font-family: Roboto, sans-serif;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }
  h3 {
    color: var(--primary-black);
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 1008px;
  }
`;

export const UpElementsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

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

export const WrapperFormInfo = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormMainWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const LeftFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const RightFormWrap = styled.div`
  display: flex;
  flex-direction: column;
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
    padding: 12px 10px;
    align-items: flex-start;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
    color: var(--primary-blue);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const PasswordLabel = styled.label`
  display: flex;
  flex-direction: column;
  span {
    color: var(--primary-black);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 8px;
  }
  input {
    display: flex;
    padding: 12px 10px;
    align-items: flex-start;
    border-radius: 6px;
    border: 1px solid #d7e3ff;
    color: var(--primary-blue);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.25;
  }
`;

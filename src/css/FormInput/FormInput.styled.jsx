import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 18px;
  line-height: 1.33;
`;

export const LableAddEdit = styled(Label)`
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;

  padding: 12px 10px;

  color: var(--primary-blue);
  border-radius: 6px;
  border: 1px solid var(--secondary-skyblue);
  background-color: var(--white-color);

  font-size: 16px;
  line-height: 1.25;

  &::placeholder {
    color: var(--secondary-lightblue);
  }
`;

export const AuthInput = styled(Input)`
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const SettingsInput = styled(Input)`
  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--secondary-red);
  font-size: 14px;
  line-height: 1.28;
`;

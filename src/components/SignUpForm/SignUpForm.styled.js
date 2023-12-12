import { ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PasswordIconLook = styled.span`
  position: absolute;
  right: ${(props) => (props.type === "settings" ? "15px" : "10px")};
  top: ${(props) => (props.type === "settings" ? "43px" : "45px")};
  & svg {
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  color: var(--primary-black);
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 280px;
  padding-top: 24px;
  @media screen and (min-width: 768px) {
    max-width: 336px;
    margin: 0 auto 0 32px;
    padding-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 140px;
    max-width: 384px;
    margin: 0 198px 0 auto;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  color: var(--primary-black);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  input,
  input:not(:placeholder-shown) {
    ${({ $error }) =>
      $error
        ? "border: 1px solid var(--secondary-red); color: var(--secondary-red)"
        : ""};
  }
`;

export const BtnSign = styled.button`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: var(--white-color);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: none;
  outline: none;
  background: var(--primary-blue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  cursor: pointer;
  margin-top: 16px;
  width: 100%;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;

export const Linking = styled(Link)`
  display: inline-block;
  color: var(--primary-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 16px;
  outline: none;
  &:hover,
  &:focus {
    color: var(--secondary-yellow);
  }
`;
export const ForgotLink = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;
export const StyledError = styled(ErrorMessage)`
  display: block;
  margin-top: -4px;
  color: var(--secondary-red);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

import { ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PasswordIconLook = styled.div`
  height: 16px;
  width: 16px;
  position: absolute;
  right: ${(props) => (props.type === "settings" ? "15px" : "3%")};
  top: ${(props) => (props.type === "settings" ? "43px" : "34%")};
  & svg {
    color: rgba(64, 123, 255, 1);
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
  padding-top: 24px;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 140px;
  }
`;

export const AuthUpForma = styled.div`
  margin: 0 auto;
  max-width: 280px;
  @media screen and (min-width: 768px) {
    max-width: 336px;
    margin: 0 auto 0 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 384px;
    margin: 0 198px 0 auto;
  }
`;
export const Input = styled.div`
  display: flex;
  position: relative;
  padding: 12px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 6px;
  background-color: var(--white-color);
  border: 1px solid ${({ $error }) => ($error ? "#ef5050" : "#d7e3ff")};
  &:focus-within {
    border: 1px solid ${({ $error }) => ($error ? "#ef5050" : "#407bff")};
  }
`;
export const FormField = styled(Field)`
  display: flex;
  outline: none;
  justify-content: center;
  align-items: flex-start;
  border: none;
  width: 90%;
  background-color: transparent;
  color: ${({ $error }) => ($error ? "#ef5050" : "#407bff")};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
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
export const Lable = styled.p`
  display: flex;
  margin-top: 16px;
  margin-bottom: 8px;
  color: var(--primary-black);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
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
export const StyledError = styled(ErrorMessage)`
  color: var(--secondary-red);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

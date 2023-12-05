import { ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const PasswordIconLook = styled.div`
  height: 16px;
  width: 16px;
  position: absolute;
  right: 3%;
  top: 34%;
  & svg {
    color: rgba(64, 123, 255, 1);
  }
`;

export const FaEyeStyled = styled(FaEye)`
  cursor: pointer;
`;

export const FaEyeSlashStyled = styled(FaEyeSlash)`
  cursor: pointer;
  color: rgba(64, 123, 255, 1);
`;

export const Title = styled.h2`
  color: var(--primery-color-black, #2f2f2f);
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const AuthUpForma = styled.div`
  display: flex;
  flex-direction: column;
  margin: 148px 198px 0 auto;
  max-width: 384px;
`;
export const Input = styled.div`
  display: flex;
  position: relative;
  padding: 12px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 6px;
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
  width: 100%;
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
  color: var(--primery-color-white, #fff);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border: none;
  background: var(--primery-color-blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  cursor: pointer;
  margin: 16px 0;
  width: 384px;
`;
export const Lable = styled.p`
  display: flex;
  margin-top: 16px;
  margin-bottom: 8px;
  color: var(--primery-color-black, #2f2f2f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const Linking = styled(Link)`
  color: var(--primery-color-blue, #407bff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const StyledError = styled(ErrorMessage)`
  color: #ef5050;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

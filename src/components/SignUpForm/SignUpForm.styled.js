import { Field } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const PasswordIconLook = styled.div`
  height: 16px;
  width: 16px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const FaEyeStyled = styled(FaEye)`
  cursor: pointer;
`;

export const FaEyeSlashStyled = styled(FaEyeSlash)`
  cursor: pointer;
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
  padding: 12px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 6px;
  border: 1px solid var(--secondary-color-5, #d7e3ff);
`;
export const FormField = styled(Field)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: none;
  color: var(--secondary-color-4, #9ebbff);
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

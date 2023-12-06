import React from "react";
import * as yup from "yup";
import Notiflix from "notiflix";
import { Formik, Form } from "formik";
import {
  AuthUpForma,
  BtnSign,
  FormContainer,
  FormField,
  Input,
  Lable,
  Linking,
  StyledError,
  Title,
} from "./SignUpForm.styled";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/User/UserThunk";
import { usePasswordToggle } from "../../Helpers/usePasswordToggle";
import { TogglePasswordIcon } from "../TogglePasswordVisibility/TogglePasswordVisibility";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("email is not valid")
    .min(6, "the email must containe min six leters")
    .required("email is required")
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      "email is not valid"
    ),
  password: yup
    .string()
    .required("password is required")
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  // const emailRegex = /[a-z0-9]+@+[a-z]+[\./]+[a-z]{2,3}/;

  repeatPassword: yup
    .string()
    .required("repeat password is required")
    .oneOf([yup.ref("password"), null], 'Must match "password" field value'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    "password1",
    "password2",
  ]);
  const handleSubmit = ({ email, password, repeatPassword }, { resetForm }) => {
    if (password !== repeatPassword) {
      Notiflix.Notify.failure("error");
      return;
    }

    dispatch(registerThunk({ email, password }))
      .unwrap()
      .then(() => {
        resetForm();
        Notiflix.Notify.success("success");
      })
      .catch((error) => {
        Notiflix.Notify.failure(error);
      });
  };

  return (
    <FormContainer>
      <AuthUpForma>
        <Title>Sign Up</Title>
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => {
            return (
              <Form>
                <Lable>Enter your email</Lable>
                <Input $error={errors.email && touched.email}>
                  <FormField
                    $error={errors.email && touched.email}
                    autoComplete="off"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                  />
                </Input>
                <StyledError name="email" component="div" />
                <Lable>Enter your password</Lable>
                <Input $error={errors.password && touched.password}>
                  <FormField
                    $error={errors.password && touched.password}
                    autoComplete="off"
                    name="password"
                    type={showPasswords.password1 ? "text" : "password"}
                    placeholder="Password"
                  />
                  <TogglePasswordIcon
                    showPassword={showPasswords.password1}
                    onToggle={() => togglePasswordVisibility("password1")}
                  />
                </Input>
                <StyledError name="password" component="div" />
                <Lable>Repeat password</Lable>
                <Input $error={errors.repeatPassword && touched.repeatPassword}>
                  <FormField
                    $error={errors.repeatPassword && touched.repeatPassword}
                    autoComplete="off"
                    type={showPasswords.password2 ? "text" : "password"}
                    name="repeatPassword"
                    placeholder="Repeat password"
                  />
                  <TogglePasswordIcon
                    showPassword={showPasswords.password2}
                    onToggle={() => togglePasswordVisibility("password2")}
                  />
                </Input>
                <StyledError name="repeatPassword" component="div" />
                <BtnSign type="submit">Sign Up</BtnSign>
              </Form>
            );
          }}
        </Formik>
        <Linking to="/signin">Sign in</Linking>
      </AuthUpForma>
    </FormContainer>
  );
};

export default SignUpForm;

import React from "react";
import * as yup from "yup";
import { Notify } from "notiflix";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";

import { usePasswordToggle } from "../../hooks/usePasswordToggle";
import { loginThunk } from "../../redux/User/UserThunk";

import { TogglePasswordIcon } from "../TogglePasswordVisibility/TogglePasswordVisibility";
import GoogleBtn from "../shared/GoogleBtn/GoogleBtn";
import {
  BtnSign,
  ForgotLink,
  FormContainer,
  Label,
  Linking,
  StyledError,
  Title,
} from "../SignUpForm/SignUpForm.styled";
import { MainContainer } from "../../pages/HomePage/HomePage.styled";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("email is not valid")
    .min(6, "the email must containe min six leters")
    .max(64, "the email must containe maximum of 64 characters")
    .required("email is required")
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      "email is not valid"
    ),
  password: yup
    .string()
    .required("password is required")
    .min(8, "the password must containe min of 8 characters")
    .max(64, "the password must containe maximum of 64 characters"),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    "password1",
    "password2",
  ]);
  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        resetForm();
        Notify.success("Welcome back! You're now logged in.", {
          timeout: 1000,
        });
      })
      .catch((error) => {
        Notify.failure(error, { timeout: 1000 });
      });
  };
  return (
    <MainContainer>
      <FormContainer>
        <Title>Sign In</Title>
        <GoogleBtn />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => {
            return (
              <Form>
                <Label $error={errors.email && touched.email}>
                  Enter your email
                  <Field
                    $error={errors.email && touched.email}
                    autoComplete="off"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                  />
                  <StyledError name="email" component="span" />
                </Label>
                <Label $error={errors.password && touched.password}>
                  Enter your password
                  <Field
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
                  <StyledError name="password" component="span" />
                </Label>
                <BtnSign type="submit">Sign In</BtnSign>
              </Form>
            );
          }}
        </Formik>
        <ForgotLink>
          <Linking to="/forgot-password">Forgot password?</Linking>
          <Linking to="/signup">Sign Up</Linking>
        </ForgotLink>
      </FormContainer>
    </MainContainer>
  );
};

export default SignInForm;

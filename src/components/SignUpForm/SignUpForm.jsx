import React from "react";
import * as yup from "yup";
import { Notify } from "notiflix";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { registerThunk } from "../../redux/User/UserThunk";
import { setStateToken } from "../../redux/User/UserSlice";
import { usePasswordToggle } from "../../Helpers/usePasswordToggle";

import { TogglePasswordIcon } from "../TogglePasswordVisibility/TogglePasswordVisibility";
import GoogleBtn from "../shared/GoogleBtn/GoogleBtn";
import {
  BtnSign,
  FormContainer,
  Label,
  Linking,
  StyledError,
  Title,
} from "./SignUpForm.styled";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("The email is not valid.")
    .min(6, "The email must contain at least six letters.")
    .max(64, "The email must contain a maximum of 64 characters.")
    .required("Email is required.")
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      "Email is not valid."
    ),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "The password must contain a minimum of 8 characters.")
    .max(64, "The password must contain a maximum of 64 characters."),
  repeatPassword: yup
    .string()
    .required("Please repeat your password.")
    .oneOf([yup.ref("password"), null], "Passwords must match."),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    "password1",
    "password2",
  ]);
  const handleSubmit = ({ email, password, repeatPassword }, { resetForm }) => {
    if (password !== repeatPassword) {
      Notify.failure("Passwords do not match", { timeout: 1000 });
      return;
    }

    dispatch(registerThunk({ email, password }))
      .unwrap()
      .then((data) => {
        resetForm();
        dispatch(setStateToken(data.token));
        Notify.success("Welcome aboard! You're now officially registered.", {
          timeout: 1000,
        });
        navigate("/");
      })
      .catch((error) => {
        Notify.failure(error, { timeout: 1000 });
      });
  };

  return (
    <FormContainer>
      <Title>Sign Up</Title>
      <GoogleBtn />
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
              <Label $error={errors.email && touched.email}>
                Enter your email
                <Field
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
              <Label $error={errors.repeatPassword && touched.repeatPassword}>
                Repeat password
                <Field
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
                <StyledError name="repeatPassword" component="span" />
              </Label>
              <BtnSign type="submit">Sign Up</BtnSign>
            </Form>
          );
        }}
      </Formik>
      <Linking to="/signin">Sign in</Linking>
    </FormContainer>
  );
};

export default SignUpForm;

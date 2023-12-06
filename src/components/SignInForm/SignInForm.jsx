import React from "react";
import * as yup from "yup";
import Notiflix from "notiflix";
import { Formik, Form } from "formik";

import {
  AuthUpForma,
  BtnSign,
  FormField,
  Input,
  Lable,
  Linking,
  StyledError,
  Title,
} from "../SignUpForm/SignUpForm.styled";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/User/UserThunk";
import { TogglePasswordIcon } from "../TogglePasswordVisibility/TogglePasswordVisibility";
import { usePasswordToggle } from "../../Helpers/usePasswordToggle";

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
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    "password1",
    "password2",
  ]);
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(loginThunk(values))
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
    <AuthUpForma>
      <Title>Sign In</Title>
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
              <BtnSign type="submit">Sign In</BtnSign>
            </Form>
          );
        }}
      </Formik>
      <Linking to="/signup">Sign Up</Linking>
    </AuthUpForma>
  );
};

export default SignInForm;

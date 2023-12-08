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
  StyledError,
  Title,
} from "../SignUpForm/SignUpForm.styled";
import { useDispatch } from "react-redux";
import { forgotPasswordThunk } from "../../redux/User/UserThunk";
import { HaveAccount, Linkings } from "./ForgotPassword.styled";

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
});

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(forgotPasswordThunk(values))
      .unwrap()
      .then(() => {
        resetForm();
        Notiflix.Notify.success("success", { timeout: 1000 });
      })
      .catch((error) => {
        Notiflix.Notify.failure(error, { timeout: 1000 });
      });
  };
  return (
    <>
      <FormContainer>
        <AuthUpForma>
          <Title>Forgot Password ?</Title>
          <p>We will send you an email </p>
          <Formik
            initialValues={{
              email: "",
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
                      // autoComplete="off"
                      name="email"
                      type="email"
                      placeholder="E-mail"
                    />
                  </Input>
                  <StyledError name="email" component="div" />

                  <BtnSign type="submit">Send</BtnSign>
                </Form>
              );
            }}
          </Formik>
          <HaveAccount>
            <p>Do you already have an account?</p>
            <Linkings to="/signin">Sign in</Linkings>
          </HaveAccount>
        </AuthUpForma>
      </FormContainer>
    </>
  );
};

export default ForgotPasswordForm;

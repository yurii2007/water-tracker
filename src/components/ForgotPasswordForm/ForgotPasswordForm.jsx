import React from "react";
import * as yup from "yup";
import { Notify } from "notiflix";
import { Formik, Form, Field } from "formik";

import {
  BtnSign,
  FormContainer,
  Label,
  StyledError,
  Title,
} from "../SignUpForm/SignUpForm.styled";
import { useDispatch } from "react-redux";
import { forgotPasswordThunk } from "../../redux/User/UserThunk";
import { HaveAccount, Linkings } from "./ForgotPassword.styled";
import { useNavigate } from "react-router-dom";
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
});

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(forgotPasswordThunk(values))
      .unwrap()
      .then((data) => {
        navigate("/signin");
        resetForm();
        Notify.success(data.message, { timeout: 1000 });
      })
      .catch((error) => {
        Notify.failure(error, { timeout: 1000 });
      });
  };
  return (
    <MainContainer>
      <FormContainer>
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

                <BtnSign type="submit">Send</BtnSign>
              </Form>
            );
          }}
        </Formik>
        <HaveAccount>
          <p>Do you already have an account?</p>
          <Linkings to="/signin">Sign in</Linkings>
        </HaveAccount>
      </FormContainer>
    </MainContainer>
  );
};

export default ForgotPasswordForm;

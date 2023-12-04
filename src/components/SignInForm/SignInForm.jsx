import React from "react";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";

import {
  AuthUpForma,
  BtnSign,
  FormField,
  Input,
  Lable,
  Linking,
  Title,
} from "../SignUpForm/SignUpForm.styled";

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
});

const SignInForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // dispatch(register(values))
    //   .unwrap()
    //   .then(() => {
    //     resetForm();
    //     Notiflix.Notify.success("success");
    //   })
    //   .catch(() => {
    //     Notiflix.Notify.failure("error");
    //   });
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
              <Input>
                <FormField name="email" type="email" placeholder="E-mail" />
                <ErrorMessage name="email" component="div" />
              </Input>
              <Lable>Enter your password</Lable>
              <Input>
                <FormField
                  name="password"
                  type="password"
                  placeholder="Password"
                  validate={(e) => {
                    // errors.password = checkPassword(e);
                  }}
                />
                {errors.password && touched.password && (
                  <p>{errors.password}</p>
                )}
              </Input>

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

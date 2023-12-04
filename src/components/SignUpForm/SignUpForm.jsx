import React from "react";
import * as yup from "yup";
// import Notiflix from "notiflix";
import { Formik, Form, ErrorMessage } from "formik";
import {
  AuthUpForma,
  BtnSign,
  FormField,
  Input,
  Lable,
  Linking,
  Title,
} from "./SignUpForm.styled";
// import { useDispatch } from "react-redux";

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
  // const emailRegex = /[a-z0-9]+@+[a-z]+[\./]+[a-z]{2,3}/;

  Password: yup
    .string()
    .oneOf([yup.ref("password"), null], 'Must match "password" field value'),
});

const SignUpForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    // if (values.password !== values.confirmPassword) {
    //   return;
    // }
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
              <Lable>Repeat password</Lable>
              <Input>
                <FormField
                  type="password"
                  name="repeatPassword"
                  placeholder="Repeat password"
                />
                <ErrorMessage name="repeatPassword" component="div" />
              </Input>
              <BtnSign type="submit">Sign Up</BtnSign>
            </Form>
          );
        }}
      </Formik>

      <Linking to="/signin">Sign in</Linking>
    </AuthUpForma>
  );
};

export default SignUpForm;

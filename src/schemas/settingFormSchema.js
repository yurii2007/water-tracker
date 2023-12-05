import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  gender: Yup.string().required("Gender is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      "email is not valid"
    ),
  oldPassword: Yup.string(),
  newPassword: Yup.string(),
  repeatPassword: Yup.string().when("newPassword", {
    is: (val) => val && val.length > 0,
    then: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Passwords must match"
    ),
  }),
});

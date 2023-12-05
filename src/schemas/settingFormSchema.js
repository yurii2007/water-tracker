import * as yup from "yup";
const emailRegex = /[a-z0-9]+@+[a-z]+[\./]+[a-z]{2,3}/;

export const validationSchema = yup.object().shape({
  gender: yup.string().required(),
  name: yup.string(),
  email: yup.string().matches(emailRegex, "Email is not valid"),
  oldPassword: yup
    .string()
    .when("newPassword", (newPassword, field) =>
      newPassword[0] ? field.required() : field
    ),
  newPassword: yup.string().nullable(),

  repeatPassword: yup
    .string()
    .test("commonPassword", "Passwords do not match.", function (value) {
      const newPassword = this.resolve(yup.ref("newPassword"));
      return !newPassword || String(value) === String(newPassword);
    }),
});

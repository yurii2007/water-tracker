import * as yup from "yup";
const emailRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;

export const validationSchema = yup.object().shape({
  gender: yup.string(),
  name: yup.string(),
  email: yup.string().matches(emailRegex, "Email is not valid"),
  oldPassword: yup
    .string()
    .when("newPassword", (newPassword, field) =>
      newPassword[0] ? field.required("Please enter your password.") : field
    ),
  newPassword: yup
    .string()
    .nullable()
    .min(8, "New password must be at least 8 characters")
    .test(
      "notSameAsOldPassword",
      "New password must be different from the old password",
      function (value) {
        const oldPassword = this.resolve(yup.ref("oldPassword"));
        return !oldPassword || String(value) !== String(oldPassword);
      }
    ),

  repeatPassword: yup
    .string()
    .test("commonPassword", "Passwords do not match.", function (value) {
      const newPassword = this.resolve(yup.ref("newPassword"));
      return !newPassword || String(value) === String(newPassword);
    }),
});

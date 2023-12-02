import { useFormik } from "formik";

const SettingForm = () => {
  const { values, touched, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      gender: "",
      name: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
    // validationSchema: ,
    onSubmit: (values) => {
      console.log(values);
      // dispatch to update user will be here
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Your gender identity</h3>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={values.gender === "female"}
          />
          <span>Girl</span>
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={values.gender === "male"}
          />
          <span>Man</span>
        </label>
        <label>
          Your name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <label>
          E-mail
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <h3>Password</h3>
        <label>
          Outdated password:
          <input
            autoComplete="new-password"
            id="oldPassword"
            value={values.oldPassword}
            onChange={handleChange}
            placeholder="Old password"
          />
        </label>
        <label>
          New Password:
          <div>
            <input
              autoComplete="off"
              name="newPassword"
              value={values.newPassword}
              placeholder="New password"
            />
          </div>
        </label>
        <label>
          Repeat new password:
          <input
            autoComplete="off"
            name="repeatPassword"
            value={values.repeatPassword}
            onChange={handleChange}
            placeholder="Repeat password"
          />
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default SettingForm;

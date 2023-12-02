import { useFormik } from "formik";
import {
  FormMainWrapper,
  InputLabel,
  LeftFormWrap,
  PasswordLabel,
  RightFormWrap,
  WrapperFormInfo,
} from "./SettingModal.styled";

const SettingForm = () => {
  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
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
      <WrapperFormInfo>
        <FormMainWrapper>
          <LeftFormWrap>
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

            <InputLabel>
              <span> Your name</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </InputLabel>
            <InputLabel>
              <span> E-mail</span>
              <input
                autoComplete="off"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </InputLabel>
          </LeftFormWrap>
          <RightFormWrap>
            <h3>Password</h3>
            <PasswordLabel>
              <span> Outdated password:</span>
              <input
                autoComplete="new-password"
                id="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                placeholder="Old password"
              />
            </PasswordLabel>
            <PasswordLabel>
              <span> New Password:</span>
              <div>
                <input
                  autoComplete="off"
                  name="newPassword"
                  value={values.newPassword}
                  placeholder="New password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </PasswordLabel>
            <PasswordLabel>
              <span> Repeat new password:</span>
              <input
                autoComplete="off"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={handleChange}
                placeholder="Repeat password"
              />
            </PasswordLabel>
          </RightFormWrap>
        </FormMainWrapper>
        <button type="submit">Save</button>
      </WrapperFormInfo>
    </form>
  );
};

export default SettingForm;

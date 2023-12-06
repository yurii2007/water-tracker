import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { updateUserThunk } from "../../redux/User/UserThunk";
import { validationSchema } from "../../schemas/settingFormSchema";
import { TogglePasswordIcon } from "../TogglePasswordVisibility/TogglePasswordVisibility";

import {
  BtnSave,
  BtnSaveWrap,
  FormMainWrapper,
  InputLabel,
  LeftFormWrap,
  PasswordLabel,
  RightFormWrap,
  WrapperFormInfo,
} from "./SettingModal.styled";

const SettingForm = () => {
  const userData = useSelector((state) => state.user.user);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setIsShow(!isShow);
  };

  const { values, errors, handleSubmit, handleChange, handleBlur, setValues } =
    useFormik({
      initialValues: {
        gender: "",
        name: "",
        email: "",
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      },
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
        dispatch(
          updateUserThunk({
            gender: values.gender,
            name: values.name,
            email: values.email,
            oldPassword: values.oldPassword,
            password: values.newPassword,
          })
        )
          .unwrap()
          .then(() => {
            alert("User updated successfully!");
            setValues((prevValues) => ({
              ...prevValues,
              oldPassword: "",
              newPassword: "",
              repeatPassword: "",
            }));
          });
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <WrapperFormInfo>
        <FormMainWrapper>
          <LeftFormWrap>
            <h3>Your gender identity</h3>
            <div>
              <label style={{ marginRight: "24px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={userData.gender === "female"}
                />
                <span> Girl </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={userData.gender === "male"}
                />
                <span> Man </span>
              </label>
            </div>

            <InputLabel>
              <span> Your name</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder={userData.name ? userData.name : "Enter you name"}
              />
              {errors.name && <p>{errors.name}</p>}
            </InputLabel>
            <InputLabel>
              <span> E-mail</span>
              <input
                autoComplete="off"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder={userData.email ? userData.email : ""}
              />
              {errors.email && <p>{errors.email}</p>}
            </InputLabel>
          </LeftFormWrap>
          <RightFormWrap>
            <h3>Password</h3>
            <PasswordLabel>
              <span> Outdated password:</span>
              <input
                type={isShow ? "text" : "password"}
                autoComplete="off"
                id="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                placeholder="Old password"
                onBlur={handleBlur}
              />
              {errors.oldPassword && <p>{errors.oldPassword}</p>}
              <TogglePasswordIcon
                type={"settings"}
                showPassword={isShow}
                onToggle={toggleShowPassword}
              />
            </PasswordLabel>
            <PasswordLabel>
              <span> New Password:</span>
              <div>
                <input
                  type={isShow ? "text" : "password"}
                  autoComplete="off"
                  name="newPassword"
                  value={values.newPassword}
                  placeholder="New password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newPassword && <p>{errors.newPassword}</p>}
                <TogglePasswordIcon
                  type={"settings"}
                  showPassword={isShow}
                  onToggle={toggleShowPassword}
                />
              </div>
            </PasswordLabel>
            <PasswordLabel>
              <span> Repeat new password:</span>
              <input
                type={isShow ? "text" : "password"}
                autoComplete="off"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={handleChange}
                placeholder="Repeat password"
                onBlur={handleBlur}
              />
              {errors.repeatPassword && <p>{errors.repeatPassword}</p>}
              <TogglePasswordIcon
                type={"settings"}
                showPassword={isShow}
                onToggle={toggleShowPassword}
              />
            </PasswordLabel>
          </RightFormWrap>
        </FormMainWrapper>
        <BtnSaveWrap>
          <BtnSave type="submit">Save</BtnSave>
        </BtnSaveWrap>
      </WrapperFormInfo>
    </form>
  );
};

export default SettingForm;

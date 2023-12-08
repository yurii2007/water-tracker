import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";
import { updateUserThunk } from "../../redux/User/UserThunk";
import { validationSchema } from "../../schemas/settingFormSchema";
import { TogglePasswordIcon } from "../TogglePasswordVisibility/TogglePasswordVisibility";

import {
  BtnSave,
  BtnSaveWrap,
  ErrorPassText,
  FormMainWrapper,
  GenderBlock,
  InputLabel,
  LeftFormWrap,
  PasswordLabel,
  RightFormWrap,
  WrapperFormInfo,
} from "./SettingModal.styled";
import { usePasswordToggle } from "../../Helpers/usePasswordToggle";

const SettingForm = ({ closeModal }) => {
  const userData = useSelector((state) => state.user.user);
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    "oldPassword",
    "password1",
    "password2",
  ]);

  const dispatch = useDispatch();

  const { values, errors, handleSubmit, handleChange, handleBlur, setValues } =
    useFormik({
      initialValues: {
        gender: userData.gender || "",
        name: "",
        email: "",
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      },
      validationSchema,
      onSubmit: (values) => {
        const isGenderChanged = values.gender !== userData.gender;
        dispatch(
          updateUserThunk({
            gender: isGenderChanged ? values.gender : "",
            name: values.name,
            email: values.email,
            passwordOld: values.oldPassword,
            passwordNew: values.newPassword,
          })
        )
          .unwrap()
          .then(() => {
            if (values.email) {
              Notiflix.Notify.success(
                `Visit ${userData.email} to confirm new email`
              );
            }
            Notiflix.Notify.success("account updated successfully!");
            setValues((prevValues) => ({
              ...prevValues,
              oldPassword: "",
              newPassword: "",
              repeatPassword: "",
            }));
            closeModal();
          })
          .catch((error) => {
            Notiflix.Notify.failure(error);
          });
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <WrapperFormInfo>
        <FormMainWrapper>
          <LeftFormWrap>
            <h3>Your gender identity</h3>
            <GenderBlock>
              <label style={{ marginRight: "24px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={values.gender === "female"}
                />
                <span> Girl </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={values.gender === "male"}
                />
                <span> Man </span>
              </label>
            </GenderBlock>

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
              {errors.email && <ErrorPassText>{errors.email}</ErrorPassText>}
            </InputLabel>
          </LeftFormWrap>
          <RightFormWrap>
            <h3>Password</h3>
            <PasswordLabel $error={errors.oldPassword ? "true" : "false"}>
              <span> Outdated password:</span>
              <input
                type={showPasswords.oldPassword ? "text" : "password"}
                autoComplete="off"
                id="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                placeholder="Old password"
                onBlur={handleBlur}
              />
              {errors.oldPassword && (
                <ErrorPassText>{errors.oldPassword}</ErrorPassText>
              )}
              <TogglePasswordIcon
                type={"settings"}
                showPassword={showPasswords.oldPassword}
                onToggle={() => togglePasswordVisibility("oldPassword")}
              />
            </PasswordLabel>
            <PasswordLabel $error={errors.newPassword ? "true" : "false"}>
              <span> New Password:</span>
              <div>
                <input
                  type={showPasswords.password1 ? "text" : "password"}
                  autoComplete="off"
                  name="newPassword"
                  value={values.newPassword}
                  placeholder="New password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newPassword && (
                  <ErrorPassText>{errors.newPassword}</ErrorPassText>
                )}
                <TogglePasswordIcon
                  type={"settings"}
                  showPassword={showPasswords.password1}
                  onToggle={() => togglePasswordVisibility("password1")}
                />
              </div>
            </PasswordLabel>
            <PasswordLabel $error={errors.repeatPassword ? "true" : "false"}>
              <span> Repeat new password:</span>
              <input
                type={showPasswords.password2 ? "text" : "password"}
                autoComplete="off"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={handleChange}
                placeholder="Repeat password"
                onBlur={handleBlur}
              />
              {errors.repeatPassword && (
                <ErrorPassText>{errors.repeatPassword}</ErrorPassText>
              )}

              <TogglePasswordIcon
                type={"settings"}
                showPassword={showPasswords.password2}
                onToggle={() => togglePasswordVisibility("password2")}
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

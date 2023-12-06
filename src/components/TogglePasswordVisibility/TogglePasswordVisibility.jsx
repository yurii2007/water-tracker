import PropTypes from "prop-types";
import { PasswordIconLook } from "../SignUpForm/SignUpForm.styled";
import { ReactComponent as FaEye } from "../../images/svg/open_eye_icon.svg";
import { ReactComponent as FaEyeSlash } from "../../images/svg/close_eye_icon.svg";
export const TogglePasswordIcon = ({ showPassword, onToggle, type }) => {
  return (
    <PasswordIconLook type={type}>
      {showPassword ? (
        <FaEye onClick={onToggle} />
      ) : (
        <FaEyeSlash onClick={onToggle} />
      )}
    </PasswordIconLook>
  );
};

TogglePasswordIcon.propTypes = {
  onToggle: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  type: PropTypes.string,
  // prop "type" is intended to indicate the value of the element's position
};

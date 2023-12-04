import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PasswordIconLook } from "../SignUpForm/SignUpForm.styled";

export const TogglePasswordIcon = ({ showPassword, onToggle }) => {
  return (
    <PasswordIconLook>
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
};

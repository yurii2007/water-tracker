import { GoogleForm } from "./GoogleBtn.styled";
import { ReactComponent as GoogleLogo } from "../../../images/svg/google_logo.svg";

const GoogleBtn = () => {
  return (
    <>
      <GoogleForm
        action="https://water-tracker-f07j.onrender.com/api/auth/google"
        method="get"
      >
        <p>You can use your Google Account to authorize:</p>
        <button type="submit">
          <GoogleLogo />
          google
        </button>
      </GoogleForm>
    </>
  );
};

export default GoogleBtn;

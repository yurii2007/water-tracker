import React, { useState, useRef } from "react";
import { ReactComponent as UploadImgSvg } from "../../images/svg/upload_icon.svg";
import SettingForm from "./SettingForm";

const SettingModal = () => {
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    filePickerRef.current.click();
  };

  return (
    <div>
      <div>
        <h2>Setting</h2>
        <h3>Your photo</h3>
        <div>
          <img src={"avatar"} alt="avatar" />
          <label>
            <input
              style={{ display: "none" }}
              ref={filePickerRef}
              type="file"
              accept=".jpg"
              //   onChange={FileChange}
              // dispatch to update avatar will be here
            />
            <button type="button" onClick={handleButtonClick}>
              <UploadImgSvg />
              <span>Upload a photo</span>
            </button>
          </label>
          {selectedFile && <img src={selectedFile} alt="Picked Image" />}
        </div>
        <SettingForm />
      </div>
    </div>
  );
};

export default SettingModal;

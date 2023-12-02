import React, { useState, useRef } from "react";
import { ReactComponent as UploadImgSvg } from "../../images/svg/upload_icon.svg";
import { ReactComponent as CloseModalSvg } from "../../images/svg/x.svg";
import SettingForm from "./SettingForm";
import {
  ContainerSettings,
  UpElementsWrapper,
  UploadWrapper,
} from "./SettingModal.styled";

const SettingModal = () => {
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    filePickerRef.current.click();
  };

  const FileChange = (e) => {
    const formaData = new FormData();
    console.log(formaData);
    // dispatch to update avatar will be here
  };

  return (
    <ContainerSettings>
      <UpElementsWrapper>
        <h2>Setting</h2>
        <CloseModalSvg />
      </UpElementsWrapper>
      <h3>Your photo</h3>
      <UploadWrapper>
        <div>
          <img src={"avatar"} alt="avatar" />
        </div>
        <label>
          <input
            style={{ display: "none" }}
            ref={filePickerRef}
            type="file"
            accept=".jpg"
            onChange={FileChange}
          />
          <button type="button" onClick={handleButtonClick}>
            <UploadImgSvg />
            Upload a photo
          </button>
        </label>
        {selectedFile && <img src={selectedFile} alt="Picked Image" />}
      </UploadWrapper>
      <SettingForm />
    </ContainerSettings>
  );
};

export default SettingModal;

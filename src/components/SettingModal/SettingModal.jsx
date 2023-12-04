import React, { useRef } from "react";
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

  const FileChange = async (e) => {
    const formData = new FormData();
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      formData.append("avatar", file);
      // dispatch to update avatar will be here
    }
  };

  const handleButtonClick = () => {
    filePickerRef.current.click();
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
        {/* {selectedFile && <img src={selectedFile} alt="Picked" />} */}
      </UploadWrapper>
      <SettingForm />
    </ContainerSettings>
  );
};

export default SettingModal;

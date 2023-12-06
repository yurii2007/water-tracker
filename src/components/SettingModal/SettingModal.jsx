import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import SettingForm from "./SettingForm";
import { updateAvatarThunk } from "../../redux/User/UserThunk";

import { ReactComponent as UploadImgSvg } from "../../images/svg/upload_icon.svg";
import { ReactComponent as CloseModalSvg } from "../../images/svg/x.svg";
import {
  ContainerSettings,
  UpElementsWrapper,
  UpTitle,
  UploadWrapper,
} from "./SettingModal.styled";

const pictureFormat = ["jpg", "jpeg", "ico", "png", "svg", "webp"];

const SettingModal = () => {
  const filePickerRef = useRef(null);
  const avatar = useSelector((state) => state.user.user.avatar);

  const dispatch = useDispatch();

  const FileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (pictureFormat.includes(fileExtension)) {
        dispatch(updateAvatarThunk(e.target.files[0]));
      }
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
      <UpTitle>Your photo</UpTitle>
      <UploadWrapper>
        <div>
          {avatar ? (
            <img
              style={{ width: "80px", height: "80px" }}
              src={avatar}
              alt="Picked"
            />
          ) : (
            <img
              style={{ width: "80px", height: "80px" }}
              src={"avatar"}
              alt="avatar"
            />
          )}
        </div>
        <label>
          <input
            style={{ display: "none" }}
            ref={filePickerRef}
            type="file"
            accept={pictureFormat.map((format) => `.${format}`).join(",")}
            onChange={FileChange}
          />
          <button type="button" onClick={handleButtonClick}>
            <UploadImgSvg />
            Upload a photo
          </button>
        </label>
      </UploadWrapper>
      <SettingForm />
    </ContainerSettings>
  );
};

export default SettingModal;

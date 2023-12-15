import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import SettingForm from "./SettingForm";
import { updateAvatarThunk } from "../../redux/User/UserThunk";

import { ReactComponent as UploadImgSvg } from "../../images/svg/upload_icon.svg";
import { ReactComponent as AvatarSvg } from "../../images/svg/logo.svg";
import { UpTitle, UploadWrapper } from "./SettingModal.styled";
import { useModal } from "../../context/ModalContext/ModalContextProvider";
import Notiflix from "notiflix";
import { selectAvatar } from "../../redux/selectors";

const pictureFormat = ["jpg", "jpeg", "ico", "png", "svg", "webp"];

const SettingModal = () => {
  const filePickerRef = useRef(null);
  const avatar = useSelector(selectAvatar);

  const dispatch = useDispatch();
  const toggleModal = useModal();

  const FileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (pictureFormat.includes(fileExtension)) {
        dispatch(updateAvatarThunk(file))
          .unwrap()
          .then(() => Notiflix.Notify.success("avatar updated successfully!"))
          .catch((error) => {
            Notiflix.Notify.failure(error);
          });
      }
    }
  };

  const handleButtonClick = () => {
    filePickerRef.current.click();
  };

  return (
    <>
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
            <AvatarSvg />
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
      <SettingForm closeModal={() => toggleModal()} />
    </>
  );
};

export default SettingModal;

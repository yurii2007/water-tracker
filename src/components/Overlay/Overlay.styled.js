import styled from "styled-components";

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-inline: 20px;
  background-color: ${({ $isLogoModal }) =>
    $isLogoModal ? "transparent" : "#000000cc"};

  padding: ${({ $isSettingModal, $isDailyModal, $isEditModal }) =>
    $isSettingModal
      ? "240px 0px 10px"
      : $isDailyModal
      ? "220px 0px 10px"
      : $isEditModal
      ? "50px 0px 10px"
      : "0px"};

  @media screen and (min-width: 768px) {
    padding-inline: 32px;
    padding: ${({ $isDailyModal, $isSettingModal }) =>
      $isDailyModal
        ? " 80px 0px 10px"
        : $isSettingModal
        ? "240px 0px 10px"
        : "0px"};
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

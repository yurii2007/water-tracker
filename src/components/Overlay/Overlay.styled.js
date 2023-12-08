import styled from "styled-components";

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 20px;
  background-color: ${({ $isLogoModal }) => ($isLogoModal ? "transparent" : "#000000cc")};

  @media screen and (min-width: 768px) {
    padding-inline: 32px;
  }
`;

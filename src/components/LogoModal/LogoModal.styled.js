import styled from "styled-components";

export const Div = styled.div`
  background-color: transparent;
  position: fixed;
  top: 48px;
  left: 57%;
  height: 100vh;
  width: 100vw;

  @media (min-width: 768px) {
    top: 56px;
    left: 80.5%;
  }

  @media (min-width: 1440px) {
    left: 84%;
  }
`;

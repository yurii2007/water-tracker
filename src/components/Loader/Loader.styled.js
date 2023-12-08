import styled from "styled-components";

export const DivLoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: rgba(236, 242, 255, 0.3);
  backdrop-filter: blur(3px);
`;

export const DivSuspenseLoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

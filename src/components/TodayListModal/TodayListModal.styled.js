import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: var(--white-color);
  position: relative;
  width: 256px;
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 592px;
  }
`;

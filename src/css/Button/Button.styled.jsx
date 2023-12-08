import styled from "styled-components";

const Btn = styled.button(({ width, buttonType, theme }) => ({
  width: `${width}px`,
  color:
    buttonType === "cancel"
      ? theme.color.primary.blue
      : theme.color.primary.white,
  backgroundColor:
    buttonType === "cancel"
      ? theme.color.secondary.gray
      : buttonType === "delete"
      ? theme.color.secondary.tomato
      : theme.color.primary.blue,
}));

export const ButtonContainer = styled(Btn)`
  padding: 10px 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

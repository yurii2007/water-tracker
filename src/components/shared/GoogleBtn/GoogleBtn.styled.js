import styled from "styled-components";

export const GoogleForm = styled.form`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;

  button > svg {
    width: 18px;
    height: 18px;
  }

  button {
    width: fit-content;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 16px 32px;

    border: 1px solid #fafafa;
    cursor: pointer;

    background-color: #fafafa;
    text-align: center;
    text-transform: capitalize;
    color: #000000;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.025em;
  }

  button:is(:hover, :focus) {
    border: 1px solid #00122f;
  }
`;

import styled from "styled-components";

export const DailyNormaContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid var(--secondary-gray);
  box-shadow: 0px 4px 8px 0px #9ebbff1f;
  background-color: var(--white-color);

  p {
    color: var(--primary-black);
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const DailyNormaContainerWaterStats = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;
  letter-spacing: 0em;
  text-align: left;

  span {
    color: var(--primary-blue);
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }

  button {
    background: transparent;
    border: none;
    color: #8baeff;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    transition: color 0.2s linear;

    &:is(:hover, :focus) {
      color: var(--primary-blue);
      outline: none;
    }
  }
`;

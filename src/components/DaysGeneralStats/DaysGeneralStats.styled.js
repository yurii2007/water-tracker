import styled from "styled-components";

export const DayStatsContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 280px;
  height: 188px;
  padding: 24px 13px;
  border-radius: 10px;
  background: var(--white-color);
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  p {
    color: var(--primary-black);
    line-height: 1.25;

    span {
      color: var(--primary-blue);
      font-size: 18px;
      font-weight: 500;
      line-height: 1.33;
    }
  }
`;

export const UpperElem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: var(--primary-blue);
    font-size: 16px;
    line-height: 1.25;
  }
`;

import styled from "styled-components";

export const MonthHeading = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--primary-black);
`;

export const DivHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivMonthSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .arrow {
    background: transparent;
    border: none;
    padding: 0;
    width: 14px;
    height: 14px;
  }
  .month__name {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--primary-blue);
  }
`;

export const UlMonth = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px 26px;
  margin-top: 16px;
  list-style: none;
`;

export const LiDayStyles = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0em;
  span {
    display: block;
  }
  .day {
    font-size: 16px;
    line-height: 20px;

    padding: ${({ $percentage }) => ($percentage < 100 ? "7px 6px" : "7px")};
    background: var(--white-color);
    border-radius: 50%;
    border: none;
    border: ${({ $percentage }) =>
      $percentage < 100 ? "1px solid var(--secondary-yellow)" : "none"};
  }
  .percentage {
    font-size: 10px;
    line-height: 16px;
    color: var(--secondary-skyblue);
  }
`;

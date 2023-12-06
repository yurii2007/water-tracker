import { ReactComponent as LeftArrow } from "../../images/svg/month_arrow_left.svg";
import { ReactComponent as RightArrow } from "../../images/svg/month_arrow_right.svg";
import {
  MonthHeading,
  DivHeadingWrapper,
  DivMonthSwitcher,
} from "./MonthStatsTable.styled";

const MonthHeader = ({ changeDirection, month }) => {
  return (
    <DivHeadingWrapper>
      <MonthHeading>Month</MonthHeading>
      <DivMonthSwitcher>
        <button className="arrow" onClick={() => changeDirection(-1)} type="button">
          <LeftArrow />
        </button>
        <p className="month__name">{month}</p>
        <button className="arrow" onClick={() => changeDirection(1)} type="button">
          <RightArrow />
        </button>
      </DivMonthSwitcher>
    </DivHeadingWrapper>
  );
};

export default MonthHeader;

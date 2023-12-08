import { getMonthName } from "../../utils/getMonthName";

import { ReactComponent as LeftArrow } from "../../images/svg/month_arrow_left.svg";
import { ReactComponent as RightArrow } from "../../images/svg/month_arrow_right.svg";
import {
  MonthHeading,
  DivHeadingWrapper,
  DivMonthSwitcher,
} from "./MonthStatsTable.styled";

const MonthHeader = ({ changeDirection, month, year }) => {
  return (
    <DivHeadingWrapper>
      <MonthHeading>Month</MonthHeading>
      <DivMonthSwitcher>
        <button className="arrow" onClick={() => changeDirection("back")} type="button">
          <LeftArrow />
        </button>
        <p className="month__name">{getMonthName(month)}, {year}</p>
        <button
          className="arrow"
          onClick={() => changeDirection("forward")}
          type="button"
        >
          <RightArrow />
        </button>
      </DivMonthSwitcher>
    </DivHeadingWrapper>
  );
};

export default MonthHeader;

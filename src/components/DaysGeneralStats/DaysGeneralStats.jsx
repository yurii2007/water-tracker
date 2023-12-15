import { months } from "../../constants/months";
import useOutsideClick from "../../hooks/useOutsideClick";

import { ReactComponent as CloseModalSvg } from "../../images/svg/x.svg";
import { DayStatsContainer, UpperElem } from "./DaysGeneralStats.styled";

const DaysGeneralStats = ({ currentDay, close }) => {
  const ref = useOutsideClick(close);

  const { date, dailyNorma, percent, quantity } = currentDay;
  const info = {
    dailyNorma: dailyNorma ?? 0,
    percent: percent ?? 0,
  };
  const monthName = months[date?.month - 1];
  const norma = info.dailyNorma / 1000;

  return (
    <DayStatsContainer ref={ref} $dayNumber={date.day}>
      <UpperElem>
        <p>
          <span>{date?.day}, </span>
          <span>{monthName}</span>
        </p>
        <CloseModalSvg
          onClick={close}
          style={{ cursor: "pointer", width: "16px", height: "16px" }}
        />
      </UpperElem>
      <p>
        Daily norma : <span>{norma}L</span>
      </p>
      <p>
        Fulfillment of the daily norm : <span>{parseInt(info.percent)}%</span>
      </p>
      <p>
        How many servings of water : <span>{quantity ?? 0}</span>
      </p>
    </DayStatsContainer>
  );
};

export default DaysGeneralStats;

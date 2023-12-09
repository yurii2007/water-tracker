import { months } from "../../constants/months";
import { ReactComponent as CloseModalSvg } from "../../images/svg/x.svg";
import { DayStatsContainer, UpperElem } from "./DaysGeneralStats.styled";

const DaysGeneralStats = ({ currentDay, close, isLeft }) => {
  const { date, dailyNorma, percent, quantity } = currentDay || {};
  const monthName = months[date?.month - 1];
  const norma = currentDay?.dailyNorma / 1000;
  return (
    <DayStatsContainer $isLeft={isLeft} $dayNumber={date.day}>
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
      <p>Daily norma : {dailyNorma && <span>{norma}L</span>}</p>
      <p>Fulfillment of the daily norm : {percent && <span>{parseInt(percent)}%</span>}</p>
      <p>How many servings of water : {quantity && <span>{quantity}</span>}</p>
    </DayStatsContainer>
  );
};

export default DaysGeneralStats;

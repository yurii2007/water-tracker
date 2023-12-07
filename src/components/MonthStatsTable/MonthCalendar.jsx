import { LiDayStyles, UlMonth } from "./MonthStatsTable.styled";

const MonthCalendar = ({ monthData }) => {
  return (
    <UlMonth>
      {monthData.map((dayInfo) => (
        <LiDayStyles $percentage={dayInfo.percent} key={dayInfo.date.day}>
          <span className="day">{dayInfo.date.day}</span>
          <span className="percentage">{dayInfo.percent || 0}&#37;</span>
        </LiDayStyles>
      ))}
    </UlMonth>
  );
};

export default MonthCalendar;

import { useCallback, useState } from "react";

import { LiDayStyles, UlMonth } from "./MonthStatsTable.styled";
import DaysGeneralStats from "../DaysGeneralStats/DaysGeneralStats";

const MonthCalendar = ({ monthData }) => {
  const [currentDay, setCurrentDay] = useState(null);

  const closeDayStats = useCallback(() => {
    setCurrentDay(null);
  }, []);

  return (
    <UlMonth>
      {currentDay && <DaysGeneralStats currentDay={currentDay} close={closeDayStats} />}
      {monthData.map((dayInfo) => (
        <LiDayStyles
          onClick={() => setCurrentDay(dayInfo)}
          $percentage={dayInfo.percent}
          $isActive={currentDay?.date.day === dayInfo.date.day}
          key={dayInfo.date.day}
        >
          <span className="day">{dayInfo.date.day}</span>
          <span className="percentage">{parseInt(dayInfo.percent) || 0}&#37;</span>
        </LiDayStyles>
      ))}
    </UlMonth>
  );
};

export default MonthCalendar;

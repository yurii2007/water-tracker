import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMonthInfoThunk } from "../../redux/Water/WaterThunk";
import { selectMonthInfo } from "../../redux/selectors";
import { months } from "../../constants/months";

import MonthCalendar from "./MonthCalendar";
import MonthHeader from "./MothHeader";
import { DivContentWrapper } from "./MonthStatsTable.styled";

let currentDate = new Date();

const MonthStatsTable = () => {
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const monthData = useSelector(selectMonthInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonthInfoThunk(currentDate));
  }, [dispatch, currentMonth]);

  const changeMonth = useCallback(
    (direction) => {
      currentDate = new Date(currentDate.getFullYear(), currentMonth);
      setCurrentMonth(currentDate.getMonth() + direction);
    },
    [currentMonth]
  );

  const getCurrentMonth = useCallback(() => {
    if (currentMonth === 12) {
      return [months[0]];
    }
    if (currentMonth === -1) {
      return [months[11]];
    }
    return months[currentMonth];
  }, [currentMonth]);

  return (
    <DivContentWrapper>
      <MonthHeader changeDirection={changeMonth} month={getCurrentMonth()} />
      <MonthCalendar monthData={monthData} />
    </DivContentWrapper>
  );
};

export default MonthStatsTable;

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getMonthInfoThunk } from "../../redux/Water/WaterThunk";
import { selectIsWaterLoading, selectMonthInfo } from "../../redux/selectors";
import { getNewDate } from "../../utils/getNewDate";

import SuspenseLoader from "../Loader/SuspenseLoader";
import MonthCalendar from "./MonthCalendar";
import MonthHeader from "./MothHeader";
import { DivContentWrapper } from "./MonthStatsTable.styled";

const MonthStatsTable = () => {
  const monthData = useSelector(selectMonthInfo);
  const isLoading = useSelector(selectIsWaterLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  // Get the date from url params if they exists, otherwise call the function to get current date
  const [year, month] = searchParams.get("date")?.split("_") ?? getNewDate();

  useEffect(() => {
    dispatch(getMonthInfoThunk([year, month]));
  }, [dispatch, year, month]);

  const changeMonth = useCallback(
    // This function changes the month based on the given direction ('forward' or 'back')
    (direction) => {
      // Retrieve the new date based on the current year and month and the direction
      const newDate = getNewDate([+year, +month], direction);

      // Update the search params using the new date joined with an underscore
      setSearchParams({ date: newDate.join("_") });
    },
    // Dependencies for the useCallback hook
    [setSearchParams, year, month]
  );

  return (
    <DivContentWrapper>
      <MonthHeader changeDirection={changeMonth} month={month} />
      {isLoading ? <SuspenseLoader /> : <MonthCalendar monthData={monthData} />}
    </DivContentWrapper>
  );
};

export default MonthStatsTable;

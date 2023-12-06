import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MonthStatsTable = () => {
  const [currentDate, setCurrentMonth] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {});
  return (
    <div>
      <div>{currentDate.getFullYear()}</div>
      <button
        onClick={() => {
          const newDate = currentDate;
          newDate.setMonth(currentDate.getMonth() - 1);
          setCurrentMonth(newDate);
          console.log(currentDate);
        }}
        type="button"
      >
        1month
      </button>
    </div>
  );
};

export default MonthStatsTable;

import { months } from "../constants/months";

export const getMonthName = (index) => {
  return months[index - 1];
};

import { months } from "../constants/months";

export const getMonthName = (index) => {
  if (index === 12) {
    return [months[0]];
  }
  if (index === -1) {
    return [months[11]];
  }
  return months[index];
};

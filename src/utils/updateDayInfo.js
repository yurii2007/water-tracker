/**
 * Updates specific elements within the monthData array based on the current day.
 * @param {Array} monthData - Array of objects representing day information.
 * @param {Object} updatedDay - Object containing updated day information.
 * @returns {Array} - Updated monthData array.
 */
export const updateDayInfo = (monthData, updatedDay) => {
  // If monthData array is empty, return an empty array
  if (monthData.length === 0) return [];

  // Extract the current day from the updatedDay object
  const currentDate = new Date(updatedDay.dailyWaterList[0].time).getDate();

  // Iterate through each element in monthData
  return monthData.map((el) => {
    // Check if the date in the element matches the current day
    const isCurrentDate = el.date.day === currentDate;

    // If it's the current day, update percent and quantity properties
    return isCurrentDate
      ? {
          ...el,
          percent: Math.round(updatedDay.percent),
          quantity: updatedDay.dailyWaterList.length,
        }
      : el; // Otherwise, return the original element
  });
};
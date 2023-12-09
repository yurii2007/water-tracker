// Define different row heights, lengths and column widths for different screens
const rowHeight = {
  sm: 68,
  md: 74,
};

const rowLength = {
  sm: 5,
  md: 10,
};

const columnWidth = {
  md: 69,
  xl: 56,
};

/**
 * Calculate the Y position of a box based on the day number and screen size.
 * @param {number} dayNumber - The number representing the day.
 * @param {string} screen - The screen size ("sm" for small, "md" for medium).
 * @returns {number} - The calculated Y position.
 */
export const calculateBoxPositionY = (dayNumber, screen) => {
  // Calculate the number of row, where box is and the floor of that number
  const [number, floorNumber] = [
    dayNumber / rowLength[screen],
    Math.floor(dayNumber / rowLength[screen]),
  ];

  // Calculate the Y position based on the screen size(-1 for 5, 10 etc. for sm, and 10, 20 etc. for md)
  switch (screen) {
    case "sm":
      return floorNumber === number
        ? parseInt(number - 1) * rowHeight[screen] - 16
        : parseInt(number) * rowHeight[screen] - 16;
    case "md":
      return floorNumber === number
        ? parseInt(number - 1) * rowHeight[screen]
        : parseInt(number) * rowHeight[screen];
    default:
      return 0;
  }
};

export const calculateBoxPositionX = (number, screen) => {
  return +number * columnWidth[screen];
};

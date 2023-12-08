// Function to calculate water intake rate based on weight, hours, and gender
export const calculateWaterRate = (
  { weight, hours, gender } = { gender: "male", hours: 0, weight: 0 }
) => {
  // If weight is 0, return 0 (no water intake)
  if (+weight === 0 || !weight) return 0;

  switch (gender) {
    // For male gender, calculate water intake rate based on weight and hours
    case "male":
      return +weight * 0.03 + +hours * 0.4;

    // For female gender, calculate water intake rate based on weight and hours
    case "female":
      return +weight * 0.04 + +hours * 0.6;

    // For any other gender or unspecified, return 0 (default)
    default:
      return 0;
  }
};

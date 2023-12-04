import { passwordStrength } from "check-password-strength";

const options = [
  {
    id: 0,
    value: "too weak",
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: "Weak",
    minDiversity: 2,
    minLength: 6,
  },
  {
    id: 2,
    value: "Medium",
    minDiversity: 4,
    minLength: 8,
  },
  {
    id: 3,
    value: "Strong",
    minDiversity: 4,
    minLength: 10,
  },
];

export const checkPassword = (password) => {
  return passwordStrength(password, options).value;
};

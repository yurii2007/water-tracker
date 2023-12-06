import axios from "axios";

export const instance = axios.create({
  baseURL: "https://water-tracker-f07j.onrender.com/api/water/",
});

export const tokenWater = (token) => {
  instance.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
};

export const getMonthInfo = async (date) => {
  const { data } = await instance.post("month/info", { date });
  return data;
};

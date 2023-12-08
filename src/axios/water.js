import axios from "axios";

export const instance = axios.create({
  baseURL: "https://water-tracker-f07j.onrender.com/api/water/",
});

export const tokenWater = (token) => {
  instance.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
};

export const getMonthInfo = async (date) => {
  const { data } = await instance.get(`month/info?date=${date.join("-")}`);
  return data;
};

export const getTodayInfo = async () => {
  const { data } = await instance.get("today");
  return data;
};

export const addWater = async (amount) => {
  const { data } = await instance.post(
    "",
    amount
  );
  return data;
};

export const deleteWater = async (waterId) => {
  const { data } = await instance.delete(`${waterId}`);
  return data;
};

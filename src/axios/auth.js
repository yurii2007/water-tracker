import axios from "axios";

export const instance = axios.create({
  baseURL: "https://water-tracker-f07j.onrender.com/api/auth",
});

// Token

const saveToken = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const removeToken = () => {
  delete instance.defaults.headers.common["Authorization"];
};

// User athorize

export const register = async (body) => {
  const { data } = await instance.post("/register", body);
  saveToken(data.token);
  return data;
};

export const logIn = async (body) => {
  const { data } = await instance.post("/login", body);
  saveToken(data.token);
  return data;
};

export const logout = async () => {
  await instance.post("/logout");
  removeToken();
};

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://water-tracker-f07j.onrender.com/api/auth",
});

// Token

export const tokenAuth = (token) => {
  instance.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "";
};

// User athorize

export const register = async (body) => {
  const { data } = await instance.post("/register", body);
  return data;
};

export const logIn = async (body) => {
  const { data } = await instance.post("/login", body);
  return data;
};

export const logout = async () => {
  await instance.post("/logout");
  tokenAuth();
};

// forgotPassword

export const forgotPassword = async (body) => {
  const { data } = await instance.post("/forgot-password", body);
  return data;
};

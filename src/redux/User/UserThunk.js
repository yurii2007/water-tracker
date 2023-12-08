import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProfile, updateAvatar, updateUser } from "../../axios/userData";
import { logIn, register, logout, forgotPassword } from "../../axios/auth";
import setTokens from "../../utils/setTokens";

export const updateAvatarThunk = createAsyncThunk(
  "user/updateAvatar",
  async (newImg, thunkAPI) => {
    try {
      const URL = await updateAvatar(newImg);

      return URL;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (newUserData, { rejectWithValue }) => {
    try {
      const data = await updateUser(newUserData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "user/register",
  async (userCredentials, { rejectWithValue }) => {
    try {
      return await register(userCredentials);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "user/login",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const { user } = await logIn(userCredentials);
      setTokens(user.token);
      return user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await logout();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getCurrentThunk = createAsyncThunk(
  "user/getCurrent",
  async (_, thunkAPI) => {
    // try to get token from storage
    const state = await thunkAPI.getState();

    if (!state.user.token) return thunkAPI.rejectWithValue("Unauthorized");

    // set all the tokens in axios instances
    setTokens(state.user.token);

    try {
      const response = await getProfile(state.user.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
  "user/forgot-password",
  async (userCredentials, { rejectWithValue }) => {
    try {
      return await forgotPassword(userCredentials);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

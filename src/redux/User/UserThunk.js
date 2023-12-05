import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProfile, updateAvatar, updateUser } from "../../axios/userData";
import { logIn, register } from "../../axios/auth";

export const updateAvatarThunk = createAsyncThunk(
  "user/updateAvatar",
  async (newImg, { rejectWithValue }) => {
    try {
      const URL = await updateAvatar(newImg);
      return URL;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (newUserData, { rejectWithValue }) => {
    try {
      return await updateUser(newUserData);
    } catch (error) {
      return rejectWithValue(error.message);
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
      return await logIn(userCredentials);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getCurrentThunk = createAsyncThunk(
  "user/getCurrent",
  async (_, thunkAPI) => {
    const state = await thunkAPI.getState();

    if (!state.user.token) return thunkAPI.rejectWithValue("Unauthorized");

    try {
      const response = await getProfile(state.user.token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

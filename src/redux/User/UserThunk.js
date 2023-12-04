import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateAvatar, updateUser } from "../../axios/userData";

export const updateAvatarThunk = createAsyncThunk(
  "user/updateAvatar",
  async (newImg, { rejectWithValue }) => {
    try {
      const URL = await updateAvatar(newImg);
      return URL;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "user/updateUser",
  async (newUserData, { rejectWithValue }) => {
    try {
      return await updateUser(newUserData);
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

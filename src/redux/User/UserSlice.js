import { createSlice } from "@reduxjs/toolkit";

import {
  getCurrentThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
  updateAvatarThunk,
  updateUserThunk,
  updateWaterRateThunk,
} from "./UserThunk";
import setTokens from "../../utils/setTokens";

const initialState = {
  user: {
    email: "",
    name: "",
    gender: "",
    avatar: "",
    dailyNorma: "",
  },
  message: "",
  token: "",
  isLoggedIn: false,
  error: null,
};

const rejectedCase = (_, { payload }) => ({ ...initialState, error: payload });
const rejectedCaseUser = (state, { payload }) => {
  state.error = payload;
  state.message = payload.message;
};
const rejectedCaseAvatar = (state, { payload }) => ({
  ...state,
  error: payload,
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStateToken: {
      prepare: (token) => {
        setTokens(token);
        return { payload: token };
      },
      reducer: (state, { payload }) => {
        state.token = payload;
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.gender = payload.gender;
      })
      .addCase(updateUserThunk.rejected, rejectedCaseUser)
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.user.email = payload.email;
        state.user.avatar = payload.avatar;
        state.user.username = payload.name;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, rejectedCase)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.avatar = payload.avatar;
        state.token = payload.token;
        state.user.username = payload.name;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, rejectedCase)
      .addCase(getCurrentThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.avatar = payload.avatar;
        state.user.gender = payload.gender;
        state.user.dailyNorma = payload.dailyNorma;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentThunk.rejected, rejectedCase)
      .addCase(logOutThunk.fulfilled, rejectedCase)
      .addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.user.avatar = payload;
      })
      .addCase(updateAvatarThunk.rejected, rejectedCaseAvatar)
      .addCase(updateWaterRateThunk.fulfilled, (state, { payload }) => {
        state.user.dailyNorma = payload.dailyNorma;
      });
  },
});

export const userReducer = userSlice.reducer;

export const { setStateToken } = userSlice.actions;

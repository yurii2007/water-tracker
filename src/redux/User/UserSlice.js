import { createSlice } from "@reduxjs/toolkit";

import {
  getCurrentThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
  updateAvatarThunk,
  updateUserThunk,
} from "./UserThunk";

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
  isLoading: false,
  error: null,
};

const pendingCase = (state) => {
  state.isLoading = true;
};

const rejectedCase = (_, { payload }) => ({ ...initialState, error: payload });
const rejectedCaseAvatar = (state, { payload }) => ({
  ...state,
  error: payload,
});

const userSlice = createSlice({
  name: "user",
  initialState,
  //   reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserThunk.pending, pendingCase)
      .addCase(
        updateUserThunk.fulfilled,
        (state, { payload: { gender, name, email } }) => {
          state.user.email = email;
          state.user.name = name;
          state.user.gender = gender;
          state.isLoading = false;
        }
      )
      .addCase(updateUserThunk.rejected, rejectedCase)
      .addCase(registerThunk.pending, pendingCase)
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.message = payload;
        state.isLoading = false;
      })
      .addCase(registerThunk.rejected, rejectedCase)
      .addCase(loginThunk.pending, pendingCase)
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.avatar = payload.user.avatar;
        state.token = payload.user.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, rejectedCase)
      .addCase(getCurrentThunk.pending, pendingCase)
      .addCase(getCurrentThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.avatar = payload.avatar;
        state.user.gender = payload.gender;
        state.user.dailyNorma = payload.dailyNorma;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(getCurrentThunk.rejected, rejectedCase)
      .addCase(logOutThunk.pending, pendingCase)
      .addCase(logOutThunk.fulfilled, rejectedCase)
      .addCase(logOutThunk.rejected, rejectedCase)
      .addCase(updateAvatarThunk.pending, pendingCase)
      .addCase(updateAvatarThunk.fulfilled, (state, { payload }) => {
        state.user.avatar = payload;
        state.isLoading = false;
      })
      .addCase(updateAvatarThunk.rejected, rejectedCaseAvatar);
  },
});

export const userReducer = userSlice.reducer;

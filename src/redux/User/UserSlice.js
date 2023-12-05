import { createSlice } from "@reduxjs/toolkit";

import {
  getCurrentThunk,
  loginThunk,
  registerThunk,
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
  token: null,
  isLoading: false,
  error: null,
};

const pendingCase = (state) => {
  state.isLoading = true;
};

const rejectedCase = (_, { payload }) => ({ ...initialState, error: payload });

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
        state.user.email = payload.email;
        state.user.avatar = payload.avatar;
        state.token = payload.token;
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
        state.isLoading = false;
      })
      .addCase(getCurrentThunk.rejected, rejectedCase);
  },
});

export const userReducer = userSlice.reducer;

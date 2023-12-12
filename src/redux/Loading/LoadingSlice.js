import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  forgotPasswordThunk,
  getCurrentThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
  updateAvatarThunk,
  updateUserThunk,
  updateWaterRateThunk,
} from "../User/UserThunk";

const initialState = false;

export const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          updateUserThunk.pending,
          getCurrentThunk.pending,
          logOutThunk.pending,
          updateWaterRateThunk.pending,
          updateAvatarThunk.pending,
          forgotPasswordThunk.pending
        ),
        () => true
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          updateUserThunk.rejected,
          getCurrentThunk.rejected,
          logOutThunk.rejected,
          updateWaterRateThunk.rejected,
          updateAvatarThunk.rejected,
          forgotPasswordThunk.rejected,
          loginThunk.fulfilled,
          registerThunk.fulfilled,
          updateUserThunk.fulfilled,
          getCurrentThunk.fulfilled,
          logOutThunk.fulfilled,
          updateWaterRateThunk.fulfilled,
          updateAvatarThunk.fulfilled,
          forgotPasswordThunk.fulfilled
        ),
        () => false
      );
  },
});

export const loadingReducer = LoadingSlice.reducer;

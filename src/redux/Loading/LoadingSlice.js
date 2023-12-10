import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  getCurrentThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
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
          updateWaterRateThunk.pending
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
          updateWaterRateThunk.rejected
        ),
        () => false
      )
      .addMatcher(
        isAnyOf(
          loginThunk.fulfilled,
          registerThunk.fulfilled,
          updateUserThunk.fulfilled,
          getCurrentThunk.fulfilled,
          logOutThunk.fulfilled,
          updateWaterRateThunk.fulfilled
        ),
        () => false
      );
  },
});

export const loadingReducer = LoadingSlice.reducer;

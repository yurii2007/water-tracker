import { createSlice } from "@reduxjs/toolkit";

import { getMonthInfoThunk } from "./WaterThunk";

const initialState = {
  monthInfo: [],
  isLoading: false,
  error: null,
};

const pendingCase = (state) => {
  state.isLoading = true;
};

const rejectedCase = (_, { payload }) => ({ ...initialState, error: payload });

const waterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMonthInfoThunk.pending, pendingCase)
      .addCase(getMonthInfoThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.monthInfo = [...payload];
      })
      .addCase(getMonthInfoThunk.rejected, rejectedCase);
  },
});

export const waterReducer = waterSlice.reducer;

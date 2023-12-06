import { createSlice } from "@reduxjs/toolkit";

import { addWaterThunk, getMonthInfoThunk, getTodayThunk } from "./WaterThunk";

const initialState = {
  monthInfo: [],
  today: {
    percent: 0,
    dailyWaterList: [],
  },
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
      .addCase(getMonthInfoThunk.rejected, rejectedCase)
      .addCase(getTodayThunk.pending, pendingCase)
      .addCase(getTodayThunk.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList = payload.dailyWaterList;
        state.today.percent = payload.percent;
      })
      .addCase(getTodayThunk.rejected, rejectedCase)
      .addCase(addWaterThunk.pending, pendingCase)
      .addCase(
        addWaterThunk.fulfilled,
        (state, { payload: { amount, time, _id } }) => {
          state.today.dailyWaterList.push({ amount, time, _id });
        }
      )
      .addCase(addWaterThunk.rejected, rejectedCase);
  },
});

export const waterReducer = waterSlice.reducer;

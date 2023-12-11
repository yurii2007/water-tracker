import { createSlice } from "@reduxjs/toolkit";

import {
  addWaterThunk,
  deleteWaterThunk,
  editWaterThunk,
  getMonthInfoThunk,
  getTodayThunk,
} from "./WaterThunk";

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
const rejectedCaseDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const waterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMonthInfoThunk.pending, pendingCase)
      .addCase(getMonthInfoThunk.fulfilled, (state, { payload }) => {
        state.monthInfo = [...payload];
        state.isLoading = false;
      })
      .addCase(getMonthInfoThunk.rejected, rejectedCase)
      .addCase(getTodayThunk.pending, pendingCase)
      .addCase(getTodayThunk.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.today.dailyWaterList = payload.dailyWaterList;
        state.today.percent = payload.percent ?? 0;
        state.isLoading = false;
      })
      .addCase(getTodayThunk.rejected, rejectedCase)
      .addCase(addWaterThunk.pending, pendingCase)
      .addCase(
        addWaterThunk.fulfilled,
        (state, { payload: { amount, time, _id } }) => {
          state.today.dailyWaterList.push({ amount, time, _id });
          state.isLoading = false;
        }
      )
      .addCase(addWaterThunk.rejected, rejectedCase)
      .addCase(deleteWaterThunk.pending, pendingCase)
      .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
        state.today.dailyWaterList = state.today.dailyWaterList.filter(
          (data) => data._id !== payload.removedId
        );
        state.isLoading = false;
      })
      .addCase(deleteWaterThunk.rejected, rejectedCaseDelete)
      .addCase(editWaterThunk.rejected, rejectedCase)
      .addCase(editWaterThunk.pending, pendingCase)
      .addCase(editWaterThunk.fulfilled, (state, { payload }) => {
        const array = state.today.dailyWaterList;
        const indexChange = array.findIndex((item) => item._id === payload._id);

        if (indexChange !== -1) {
          array[indexChange] = payload;
        }
      });
  },
});

export const waterReducer = waterSlice.reducer;

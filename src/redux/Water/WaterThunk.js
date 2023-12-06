import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMonthInfo } from "../../axios/water";

export const getMonthInfoThunk = createAsyncThunk(
  "water/getMonthInfo",
  async (date, thunkAPI) => {
    try {
      const response = await getMonthInfo(date);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

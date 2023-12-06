import { createAsyncThunk } from "@reduxjs/toolkit";

import { addWater, getMonthInfo, getTodayInfo } from "../../axios/water";

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

export const getTodayThunk = createAsyncThunk(
  "today/getTodayInfo",
  async (_, thunkAPI) => {
    try {
      const response = await getTodayInfo();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterThunk = createAsyncThunk(
  "water/addWater",
  async (amount, thunkAPI) => {
    try {
      const response = await addWater(amount);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

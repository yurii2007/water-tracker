import { createSlice } from "@reduxjs/toolkit";

import { updateUserThunk } from "./UserThunk";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      email: "",
      name: "",
      gender: "",
      avatar: "",
      dailyNorma: "",
      token: null,
    },
    isLoading: false,
    error: null,
  },
  //   reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateUserThunk.fulfilled,
        (state, { payload: { gender, name, email } }) => {
          state.user.email = email;
          state.user.name = name;
          state.user.gender = gender;
          state.isLoading = false;
        }
      )
      .addCase(updateUserThunk.rejected, (state, { error }) => {
        state.error = error;
        state.isLoading = false;
      });
  },
});

export const userReducer = userSlice.reducer;

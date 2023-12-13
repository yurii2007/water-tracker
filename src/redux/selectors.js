import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (state) => state.loading;

// USER SELECTORS

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectToken = (state) => state.user.token;
export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => token && isLoggedIn
);

export const selectUserData = (state) => state.user.user;
export const selectIsName = (state) => state.user.user.name;
export const selectUserLogo = (state) => state.user.user.avatar;
export const selectDailyNorma = (state) => state.user.user.dailyNorma;
export const selectAvatar = (state) => state.user.user.avatar;

// WATER SELECTORS

export const selectMonthInfo = (state) => state.water.monthInfo;
export const selectorWaterInfo = (state) => state.water.today;
export const selectorWaterList = (state) => state.water.today.dailyWaterList;
export const selectIsWaterLoading = (state) => state.water.isLoading;

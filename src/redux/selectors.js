import { createSelector } from "@reduxjs/toolkit";

// USER SELECTORS

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectIsLogin = (state) => state.user.token;
const selectToken = (state) => state.user.token;
export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => token && isLoggedIn
);

export const selectIsName = (state) => state.user.user.name;
export const selectUserLogo = (state) => state.user.user.avatar;

// WATER SELECTORS

export const selectMonthInfo = (state) => state.water.monthInfo;
export const selectorWaterInfo = (state) => state.water.today;
export const selectIsWaterLoading = (state) => state.water.isLoading;

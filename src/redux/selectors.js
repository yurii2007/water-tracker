import { createSelector } from "reselect";

export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
const selectToken = (state) => state.user.token;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectMonthInfo = (state) => state.water.monthInfo;

export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => token && isLoggedIn
);

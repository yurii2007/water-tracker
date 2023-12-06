import { createSelector } from "reselect";

// export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
const selectToken = (state) => state.user.token;
// export const isRefreshing = (state) => state.auth.isRefreshing;
export const selectMonthInfo = (state) => state.water.monthInfo;
export const selectorWaterInfo = (state) => state.water.today;

export const selectIsAuth = createSelector(
  [selectIsLoggedIn, selectToken],
  (isLoggedIn, token) => token && isLoggedIn
);

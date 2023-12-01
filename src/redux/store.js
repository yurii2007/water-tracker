import { configureStore } from "@reduxjs/toolkit";
import {
//   persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "",
//   storage,
//   whitelist: [],
// };

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

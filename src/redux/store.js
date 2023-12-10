import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./User/UserSlice";
import { waterReducer } from "./Water/WaterSlice";
import { loadingReducer } from "./Loading/LoadingSlice";

const persistUserConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedUser = persistReducer(persistUserConfig, userReducer);

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    user: persistedUser,
    water: waterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);

export default store;

import { configureStore } from "@reduxjs/toolkit";
import casinoReducer from "./casino/casinoSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["casino", "search"],
};
const persistedReducer = persistReducer(persistConfig, casinoReducer);

const store = configureStore({
  reducer: {
    casino: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});
export const persistor = persistStore(store);

export default store;

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;

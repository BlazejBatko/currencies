import { configureStore } from "@reduxjs/toolkit";
import followedCurrenciesReducer from "../features/followed/CurrencyTile/currencySlice";
export const store = configureStore({
  reducer: {
    followedCurrencies: followedCurrenciesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
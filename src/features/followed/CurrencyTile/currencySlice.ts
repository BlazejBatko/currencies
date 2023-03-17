import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Rate } from "../../../Interfaces";

let initialState: Rate[] = [];

const currencySlice = createSlice({
  name: "followed",
  initialState,
  reducers: {
    followCurrency(state, action: PayloadAction<Rate>) {
      state.push({
        currency: action.payload.currency,
        code: action.payload.code,
        mid: action.payload.mid,
      });
    },
    unfollowCurrency(state, action: PayloadAction<string>) {
      return state.filter((currency) => currency.code !== action.payload);
    },
    clearFollowedCurrencies(state) {
      return (state = []);
    },
  },
});

export const { followCurrency, unfollowCurrency, clearFollowedCurrencies } =
  currencySlice.actions;

export const selectFollowedCurrencies = (state: RootState) =>
  state.followedCurrencies;

export default currencySlice.reducer;

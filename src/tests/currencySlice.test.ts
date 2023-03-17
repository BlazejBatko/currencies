import {
  followCurrency,
  unfollowCurrency,
  clearFollowedCurrencies,
} from "../features/followed/CurrencyTile/currencySlice";

import followedCurrenciesReducer from "../features/followed/CurrencyTile/currencySlice";

describe("currencySlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = followedCurrenciesReducer(undefined, { type: "" });

    expect(result).toEqual([]);
  });
});

it('should add a rate item with "followCurrency" action', () => {
  const action = {
    type: followCurrency.type,
    payload: { currency: "Polskie Zlote", code: "PLN", mid: 0.23 },
  };

  const result = followedCurrenciesReducer([], action);

  expect(result[0].code).toBe("PLN");
});

it('should remove currency from followed  by code with "unfollowCurrency" action', () => {
  const followedCurrencies = [{ currency: "Polskie Zlote", code: "PLN", mid: 0.23 }];
  const action = { type: unfollowCurrency.type, payload: "PLN" };

  const result = followedCurrenciesReducer(followedCurrencies, action);

  expect(result).toEqual([]);
});

it('should remove all curencies from followed "clearFollowedCurrencies" action', () => {
  const followedCurrencies = [
    { currency: "Polskie Zlote", code: "PLN", mid: 0.23 },
    { currency: "forint (Węgry)", code: "HUF", mid: 0.011934 },
  ];
  const action = { type: clearFollowedCurrencies.type };

  const result = followedCurrenciesReducer(followedCurrencies, action);

  expect(result).toEqual([]);
});

import React from "react";
import CurrenciesList from "../components/CurrenciesList/CurrenciesList";
import CurrencyTile from "../features/followed/CurrencyTile/CurrencyTile";
import { Rate } from "../Interfaces";

const Home = ({ rates }: { rates: Rate[] }) => {
  const renderCurrencies = () => {
    if (rates && rates.length > 0) {
      return rates.map((rate) => (
        <div key={rate.code}>
          <CurrencyTile {...rate} key={rate.code} />
        </div>
      ));
    }
  };

  return (
    <>
      <CurrenciesList>{renderCurrencies()}</CurrenciesList>
    </>
  );
};

export default Home;

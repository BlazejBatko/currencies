import React, { useEffect, useState } from "react";
import CurrenciesList from "../components/CurrenciesList/CurrenciesList";
import CurrencyTile from "../components/CurrencyTile/CurrencyTile";
import { Currencies } from "../Interfaces";

const Home = () => {
  const [currencies, setCurrencies] = useState<Currencies>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          "http://api.nbp.pl/api/exchangerates/tables/A"
        );
        const data = await response.json();
        setCurrencies(data[0]);
      } catch (error: any) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrencies();
  }, []);

  const renderCurrencies = () => {
    if (currencies && currencies.rates.length > 0) {
      return currencies.rates.map((rate, index) => (
        <div key={rate.code}>
          <CurrencyTile {...rate} key={rate.code} />
        </div>
      ));
    }
  };

  return (
    <>
      {!isLoading ? (
        <CurrenciesList>{renderCurrencies()}</CurrenciesList>
      ) : (
        <h1>Ładowanie danych</h1>
      )}
    </>
  );
};

export default Home;

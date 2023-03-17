import React from "react";
import "./CurrenciesList.css";
type Props = {
  children: React.ReactNode;
};

const CurrenciesList = ({ children }: Props) => {
  return (
    <div className="currencies-list__wrapper">
      <div className="currencies-list--container">{children}</div>
    </div>
  );
};

export default CurrenciesList;

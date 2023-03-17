import React from "react";
import { Rate } from "../../Interfaces";
import "./CurrencyTile.css";

const CurrencyTile = (props: Rate) => {
  return (
    <div className="currency-tile--container">
      <div className="currency-tile__details">
        <div className="currency-tile--header">
          <span className="currency-tile--code">{props.code}</span>
          <div className="line" />
          <div className="currency-tile--value">
            {/* Rounding value number to 6 decimal places to prevent UI from breaking */}
            {Math.floor(props.mid * 1000000) / 1000000}
          </div>
        </div>
        <i className="currency-tile--name">{props.currency}</i>
      </div>
      <button className="btn currency-tile__btn--favorite"> + </button>
    </div>
  );
};

export default CurrencyTile;

import React from "react";
import "./Spinner.css"
type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;

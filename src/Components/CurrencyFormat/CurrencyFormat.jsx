/* eslint-disable react/prop-types */
// import React from 'react'
import numeral from "numeral";

function CurrencyFormat({ amount }) {
  const formattedCurrency = numeral(amount).format("$0,0.00");
  return <div>{formattedCurrency}</div>;
}

export default CurrencyFormat;

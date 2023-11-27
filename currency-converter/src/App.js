import React, { useEffect, useState } from "react";
import "./style.css";

const InputField = ({ onAmountChange }) => {
  return (
    <input
      type="text"
      onChange={(e) => onAmountChange(Number(e.target.value))}
    ></input>
  );
};

const CurrencyDropDown = ({ onCurrencyChange }) => {
  return (
    <select name="currency" onChange={(e) => onCurrencyChange(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
};

export default function App() {
  const [curFrom, setCurFrom] = useState("");
  const [curTo, setCurTo] = useState("");
  const [amount, setAmount] = useState("");
  const [conversion, setConversion] = useState("");

  const handleOnAmountChange = (amount) => {
    setAmount(amount);
  };

  const handleFromCurChange = (cur) => {
    setCurFrom(cur);
  };

  const handleToCurChange = (cur) => {
    setCurTo(cur);
  };

  useEffect(() => {
    const host = "api.frankfurter.app";
    if (amount && curFrom && curTo)
      fetch(
        `https://${host}/latest?amount=${amount}&from=${curFrom}&to=${curTo}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const quote = Object.values(data.rates)[0];
          if (quote) setConversion(quote);
        })
        .catch((e) => alert("Something went wrong"));
  }, [amount, curFrom, curTo]);

  return (
    <div>
      <span>
        <InputField onAmountChange={handleOnAmountChange} />
        <CurrencyDropDown onCurrencyChange={handleFromCurChange} />
        <CurrencyDropDown onCurrencyChange={handleToCurChange} />
      </span>
      <p>{conversion}</p>
    </div>
  );
}

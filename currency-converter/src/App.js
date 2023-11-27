import React, { useEffect, useState } from "react";
import "./style.css";

const InputField = ({ onAmountChange, isLoading }) => {
  return (
    <input
      type="text"
      onChange={(e) => onAmountChange(Number(e.target.value))}
      disabled={isLoading}
    ></input>
  );
};

const CurrencyDropDown = ({ onCurrencyChange, isLoading, cur }) => {
  return (
    <select
      name="currency"
      onChange={(e) => onCurrencyChange(e.target.value)}
      disabled={isLoading}
      value={cur}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
};

export default function App() {
  const [curFrom, setCurFrom] = useState("USD");
  const [curTo, setCurTo] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    if (curFrom === curTo) return setConverted(amount);
    const host = "api.frankfurter.app";
    if (amount && curFrom && curTo) {
      setIsLoading(true);
      fetch(
        `https://${host}/latest?amount=${amount}&from=${curFrom}&to=${curTo}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) setConverted(data.rates[curTo]);
          setIsLoading(false);
        })
        .catch((e) => {
          alert(e);
          setIsLoading(false);
        });
    }
  }, [amount, curFrom, curTo]);

  return (
    <div>
      <span>
        <InputField
          onAmountChange={handleOnAmountChange}
          isLoading={isLoading}
        />
        <CurrencyDropDown
          onCurrencyChange={handleFromCurChange}
          isLoading={isLoading}
          cur={curFrom}
        />
        <CurrencyDropDown
          onCurrencyChange={handleToCurChange}
          isLoading={isLoading}
          cur={curTo}
        />
      </span>
      <p>{`${converted} ${curTo}`}</p>
    </div>
  );
}

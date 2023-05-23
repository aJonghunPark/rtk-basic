import React from "react";

import "../App.css";
import { Counter } from "../features/counter/Counter";
import logo from "../logo.svg";

const CounterPage = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
    </div>
  );
};

export default CounterPage;

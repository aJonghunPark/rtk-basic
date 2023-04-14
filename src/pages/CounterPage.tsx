import React from "react";

import { Counter } from "../features/counter/Counter";
import logo from "../logo.svg";

const CounterPage = () => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
    </>
  );
};

export default CounterPage;

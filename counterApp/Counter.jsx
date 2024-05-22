import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Decrement,
  Increment,
  incrementByAmount,
  decrementByAmount,
  setToZero,
} from "./redux/Counter";
import "./counter.css";

function Counter() {
  const [dark, setdark] = useState(false);
  if (dark) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      
      <button className="theme-button" onClick={() => setdark(!dark)}>
        <i className={dark ? "icon fas fa-sun" : "icon fas fa-moon"}></i>
        {/* {dark ? "Light" : "Dark"} */}
      </button>

      <h1 className="counter-value">{count}</h1>

      <div className="counter-buttons">
        <button onClick={() => dispatch(Increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
        <br />
        <button onClick={() => dispatch(Decrement())}>Decrement</button>
        <button onClick={() => dispatch(decrementByAmount(10))}>
          Decrement by 10
        </button>
        <br />
        <button onClick={() => dispatch(setToZero())}>Reset</button>
      </div>


    </div>
  );
}

export default Counter;

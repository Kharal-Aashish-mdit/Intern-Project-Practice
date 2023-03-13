import React, { useReducer } from "react";

import { counterReducer, initialState } from "./couterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [userInput, setUserInput] = React.useState<number>(0);

  return (
    <>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "dec" })}>-</button>

        <h2 className="leading-tight">{state.value}</h2>

        <button onClick={() => dispatch({ type: "inc" })}>+</button>

        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>

      <div>
        <input
          onChange={(e) => setUserInput(parseInt(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch({ type: "customInc", payload: userInput })}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Counter;

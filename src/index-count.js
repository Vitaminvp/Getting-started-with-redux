import React from "react";
import ReactDOM from "react-dom";
import createStore from "./redux/createStore";
import Counter from "./Components/Counter";

const ACTIONS_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

export const counter = (state = 0, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.INCREMENT:
      return state + 1;
    case ACTIONS_TYPE.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

// console.log(store.getState());
// store.dispatch({ type: ACTIONS_TYPE.INCREMENT });
// console.log(store.getState());

const render = () => {
  ReactDOM.render(
      <Counter
          onIncrement={() => {
            console.log(ACTIONS_TYPE.INCREMENT);
            store.dispatch({ type: ACTIONS_TYPE.INCREMENT });
          }}
          onDecrement={() => {
            console.log(ACTIONS_TYPE.DECREMENT);
            store.dispatch({ type: ACTIONS_TYPE.DECREMENT });
          }}
          value={store.getState()}
      />,
      document.getElementById("root")
  );
};

render();
store.subscribe(render);

// document.addEventListener("click", () => {
//   store.dispatch({ type: ACTIONS_TYPE.INCREMENT });
// });


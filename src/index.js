// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//import { createStore } from "redux";

const ACTIONS_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.INCREMENT:
      return state + 1;
    case ACTIONS_TYPE.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const createStore = reducer => {
  let store;
  let listeners = [];

  const getState = () => store;

  const dispatch = action => {
    store = reducer(store, action);
    listeners.forEach(listener => listener());
  };

  dispatch({});

  const subscribe = listener => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};

const store = createStore(counter);
console.log(store.getState());

// store.dispatch({ type: ACTIONS_TYPE.INCREMENT });
// console.log(store.getState());

const render = () => {
  document.body.innerHTML = store.getState();
};

render();
store.subscribe(render);

document.addEventListener("click", () => {
  store.dispatch({ type: ACTIONS_TYPE.INCREMENT });
});

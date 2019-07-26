import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store"
import ToDoApp from "./Components/ToDoApp";

console.log(store.getState());

const render = () => {
  ReactDOM.render(<ToDoApp {...store.getState()} />, document.getElementById("root"));
};


store.subscribe(render);
render();











// const toDoApp = (state = {}, action) => {
//   return {
//       todos: todos(state.todos, action),
//       visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// };
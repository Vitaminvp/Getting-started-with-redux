import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import ToDoApp from "./Components/ToDoApp";
// import Context from "./redux/context";
import {Provider} from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById("root")
);







// store.subscribe(render);
// render();

// const toDoApp = (state = {}, action) => {
//   return {
//       todos: todos(state.todos, action),
//       visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// };

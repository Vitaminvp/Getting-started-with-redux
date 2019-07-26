import React from "react";
import { ACTIONS_TYPE } from "../reducers";
import store from "../redux/store";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import Footer from "./Footer";

export const FILTERS = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVES: "SHOW_ACTIVES",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};
let nextToDoId = 2;

const getVisibleToDos = (todos, filter) => {
  switch (filter) {
    case FILTERS.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case FILTERS.SHOW_ACTIVES:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const ToDoApp = ({ todos, visibilityFilter }) => (
  <div>
    <AddToDo
      onAddClick={text => {
        store.dispatch({
          type: ACTIONS_TYPE.ADD_TODO,
          text,
          id: ++nextToDoId
        });
      }}
    />
    <ToDoList
      handleClick={id => {
        store.dispatch({
          type: ACTIONS_TYPE.TOGGLE_TODO,
          id
        });
      }}
      visibleToDos={getVisibleToDos(todos, visibilityFilter)}
    />
    <Footer
      visibilityFilter={visibilityFilter}
      onFilterClick={filter =>
        store.dispatch({
          type: ACTIONS_TYPE.SET_VISIBILITY_FILTER,
          filter
        })
      }
    />
  </div>
);

export default ToDoApp;

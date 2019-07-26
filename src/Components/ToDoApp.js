import React, { Component } from "react";
import { ACTIONS_TYPE } from "../reducers";
import store from "../redux/store";
import FilterLink from "./FilterLink";

const FILTERS = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVES: "SHOW_ACTIVES",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};
let nextToDoId = 2;

class ToDoApp extends Component {
  getVisibleToDos = (todos, filter) => {
    switch (filter) {
      case FILTERS.SHOW_ALL:
        return todos;
      case FILTERS.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case FILTERS.SHOW_ACTIVES:
        return todos.filter(t => !t.completed);
    }
  };
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleToDos = this.getVisibleToDos(todos, visibilityFilter);
    return (
      <div>
        <input type="text" ref={node => (this.input = node)} />
        <button
          onClick={() => {
            if (this.input.value) {
              store.dispatch({
                type: ACTIONS_TYPE.ADD_TODO,
                text: this.input.value,
                id: nextToDoId++
              });
              this.input.value = "";
              this.input.focus();
            }
            console.log(store.getState());
          }}
        >
          Add ToDo
        </button>
        <ol>
          {visibleToDos.map(todo => (
            <li
              key={todo.id}
              onClick={() => {
                store.dispatch({
                  type: ACTIONS_TYPE.TOGGLE_TODO,
                  id: todo.id
                });
              }}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </li>
          ))}
        </ol>
        <p>
          Show:
          {"  "}
          <FilterLink
            filter={FILTERS.SHOW_ALL}
            currentFilter={visibilityFilter}
          >
            All
          </FilterLink>
          {"  "}
          <FilterLink
            filter={FILTERS.SHOW_ACTIVES}
            currentFilter={visibilityFilter}
          >
            Actives
          </FilterLink>
          {"  "}
          <FilterLink
            filter={FILTERS.SHOW_COMPLETED}
            currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}

export default ToDoApp;

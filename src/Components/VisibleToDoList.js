import React from "react";
import { ACTIONS_TYPE } from "../reducers";
import ToDoList from "./ToDoList";
import { FILTERS } from "./ToDoApp";
import Context from "../redux/context";
// import PropTypes from "prop-types";

const getVisibleToDos = (toDos, filter) => {
  switch (filter) {
    case FILTERS.SHOW_COMPLETED:
      return toDos.filter(t => t.completed);
    case FILTERS.SHOW_ACTIVES:
      return toDos.filter(t => !t.completed);
    default:
      return toDos;
  }
};

class VisibleToDoList extends React.Component {
  static contextType = Context;

  componentDidMount() {
    const store = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
    console.log(this.context)
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const store = this.context;
    const { todos, visibilityFilter } = store.getState();
    return (
      <ToDoList
        handleClick={id => {
          store.dispatch({
            type: ACTIONS_TYPE.TOGGLE_TODO,
            id
          });
        }}
        toDos={getVisibleToDos(todos, visibilityFilter)}
      />
    );
  }
}

// VisibleToDoList.propsTypes = {
//     store: PropTypes.object
// };

//VisibleToDoList.contextType = Context;

export default VisibleToDoList;

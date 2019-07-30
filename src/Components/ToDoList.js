import React from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";
import { FILTERS } from "./ToDoApp";
import { toggleToDo } from "../actionCreators";

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

const ToDoList = ({ toDos, handleClick }) => {
  return (
    <ol>
      {toDos.map(({ id, completed, text }) => (
        <ToDo
          key={id}
          onClick={() => handleClick(id)}
          completed={completed}
          text={text}
        />
      ))}
    </ol>
  );
};
ToDoList.defaultProps = {
  toDos: []
};

const mapStateToProps = store => ({
  toDos: getVisibleToDos(store.todos, store.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  handleClick(id) {
    dispatch(toggleToDo(id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

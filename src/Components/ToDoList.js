import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos, handleClick }) => {
  return (
    <ol>
      {toDos.map(({id, completed, text}) => (
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
  toDos: [],
};

export default ToDoList;

import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ visibleToDos, handleClick }) => {
  return (
    <ol>
      {visibleToDos.map(({id, completed, text}) => (
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

export default ToDoList;

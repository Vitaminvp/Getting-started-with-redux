import React from "react";
import { ACTIONS_TYPE } from "../reducers";
import Context from "../redux/context";

let nextToDoId = 2;

const AddToDo = () => {
  let input;
  return (
      <Context.Consumer>
          {store => (
              <>
                  <input type="text" ref={node => (input = node)} />
                  <button
                      onClick={() => {
                          if (input.value) {
                              store.dispatch({
                                  type: ACTIONS_TYPE.ADD_TODO,
                                  text: input.value,
                                  id: ++nextToDoId
                              });
                              input.value = "";
                              input.focus();
                          }
                      }}
                  >
                      Add ToDos
                  </button>
              </>
          )}
      </Context.Consumer>
  );
};

// AddToDo.contextTypes = {
//   store: React.PropTypes.object
// };

export default AddToDo;

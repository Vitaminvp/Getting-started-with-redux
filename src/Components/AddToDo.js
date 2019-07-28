import React from "react";
// import Context from "../redux/context";
import {connect} from "react-redux";
import {addToDo} from "../actionCreators";

const AddToDoPure = ({dispatch}) => {
  let input;
  return (

              <>
                  <input type="text" ref={node => (input = node)} />
                  <button
                      onClick={() => {
                          if (input.value) {
                              dispatch(addToDo(input.value));
                              input.value = "";
                              input.focus();
                          }
                      }}
                  >
                      Add ToDos
                  </button>
              </>

  );
};

// AddToDo.contextTypes = {
//   store: React.PropTypes.object
// };

export default connect()(AddToDoPure);

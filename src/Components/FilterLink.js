import React from "react";
import { ACTIONS_TYPE } from "../reducers";
import store from "../redux/store";

const FilterLink = ({ filter, children, currentFilter }) => {
  if (currentFilter === filter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        store.dispatch({
          type: ACTIONS_TYPE.SET_VISIBILITY_FILTER,
          filter
        });
        console.log(filter);
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;

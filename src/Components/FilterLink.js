import React from "react";

const FilterLink = ({ filter, children, currentFilter, onFilterClick }) => {
  if (currentFilter === filter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="/#"
      onClick={e => {
        e.preventDefault();
        onFilterClick(filter)
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;

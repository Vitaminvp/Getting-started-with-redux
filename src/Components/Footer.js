import React from "react";
import FilterLink from "./FilterLink";
import { FILTERS } from "./ToDoApp";

const Footer = () => {
  return (
    <p>
      Show:
      {"  "}
      <FilterLink filter={FILTERS.SHOW_ALL}>All</FilterLink>
      {"  "}
      <FilterLink filter={FILTERS.SHOW_ACTIVES}>Actives</FilterLink>
      {"  "}
      <FilterLink filter={FILTERS.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
  );
};

export default Footer;

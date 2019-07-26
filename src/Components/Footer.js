import React from 'react';
import FilterLink from "./FilterLink";
import {FILTERS} from "./ToDoApp";

const Footer = ({visibilityFilter, onFilterClick}) => {
    return (
        <p>
            Show:
            {"  "}
            <FilterLink
                filter={FILTERS.SHOW_ALL}
                currentFilter={visibilityFilter}
                onFilterClick={onFilterClick}
            >
                All
            </FilterLink>
            {"  "}
            <FilterLink
                filter={FILTERS.SHOW_ACTIVES}
                currentFilter={visibilityFilter}
                onFilterClick={onFilterClick}
            >
                Actives
            </FilterLink>
            {"  "}
            <FilterLink
                filter={FILTERS.SHOW_COMPLETED}
                currentFilter={visibilityFilter}
                onFilterClick={onFilterClick}
            >
                Completed
            </FilterLink>
        </p>
    );
};

export default Footer;

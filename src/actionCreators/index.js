import { ACTIONS_TYPE } from "../reducers";
let nextToDoId = 2;
export const addToDo = text => ({
  type: ACTIONS_TYPE.ADD_TODO,
  text: text,
  id: ++nextToDoId
});

export const setFilter = filter => ({
  type: ACTIONS_TYPE.SET_VISIBILITY_FILTER,
  filter
});

export const toggleToDo = id => ({
  type: ACTIONS_TYPE.TOGGLE_TODO,
  id
});

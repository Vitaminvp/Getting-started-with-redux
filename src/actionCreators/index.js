import { ACTIONS_TYPE } from "../reducers";
import {v4} from "node-uuid";

export const addToDo = text => ({
  type: ACTIONS_TYPE.ADD_TODO,
  text: text,
  id: v4()
});

export const setFilter = filter => ({
  type: ACTIONS_TYPE.SET_VISIBILITY_FILTER,
  filter
});

export const toggleToDo = id => ({
  type: ACTIONS_TYPE.TOGGLE_TODO,
  id
});

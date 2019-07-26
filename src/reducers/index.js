import combineReducers from "../redux/combineReducers";

export const ACTIONS_TYPE = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  SHOW_ALL: "SHOW_ALL",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};

const todo = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case ACTIONS_TYPE.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };

    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_TYPE.ADD_TODO:
      return [...state, todo(state, action)];
    case ACTIONS_TYPE.TOGGLE_TODO:
      return state.map(state => todo(state, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const toDoApp = combineReducers({
  todos,
  visibilityFilter
});

export default toDoApp;

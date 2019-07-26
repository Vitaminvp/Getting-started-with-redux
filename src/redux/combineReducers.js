const combineReducers = reducers => {
  return (state = {}, action) =>
    Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
};

export default combineReducers;

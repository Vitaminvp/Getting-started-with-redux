const createStore = reducer => {
    let store;
    let listeners = [];

    const getState = () => store;

    const dispatch = action => {
        store = reducer(store, action);
        listeners.forEach(listener => listener());
    };

    dispatch({});

    const subscribe = listener => {

        listeners.push(listener);

        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };
    return { getState, dispatch, subscribe };
};

export default createStore;
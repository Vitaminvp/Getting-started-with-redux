//import createStore from "./createStore";
import { createStore } from "redux";
import toDoApp from "../reducers";
import {loadState, saveState} from "../localStorage";
import throttle from "lodash/throttle";




const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(toDoApp, persistedState);

    store.subscribe(throttle(()=>{
        saveState({
            todos: store.getState().todos
        })
    }, 1000));

    return store;
};


export default configureStore;

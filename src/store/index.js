import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./reducers/index.js";
import { loadState, saveState } from "./localStorage.js";
import throttle from 'lodash/throttle.js'

const persistedState = loadState()

export const store = createStore(rootReducer, persistedState, devToolsEnhancer());

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    })
}, 1000))
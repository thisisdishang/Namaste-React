import { createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
export function configureStore() {
    const store = createStore(counterReducer);
    return store;
}
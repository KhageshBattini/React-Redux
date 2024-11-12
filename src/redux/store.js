import { legacy_createStore } from "redux";
import { reducerFunction } from "./reducer";

const initialState = {
    counter: 5
};

export const store = legacy_createStore(reducerFunction, initialState);
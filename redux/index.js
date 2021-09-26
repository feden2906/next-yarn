import { createStore } from "redux";
import { reducer } from "./reducers";

export * from './action-creators';

export const store = createStore(reducer);

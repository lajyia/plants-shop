import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { createStore } from "redux";

export type IRootState = ReturnType<typeof rootStore>

const rootStore = combineReducers({
    modal: modalReducer
})


export type AppDispatch = typeof store.dispatch;

export const store = createStore(rootStore);
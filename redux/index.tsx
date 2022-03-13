import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todosSlice";

export const store = configureStore({
    reducer: {
        todos: TodoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type ApppDispatch = typeof store.dispatch

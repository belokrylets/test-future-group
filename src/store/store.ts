import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReduser from "./redusers/BooksSlice";
import searchReduser from "./redusers/searchSlice";

const rootReduser = combineReducers({
    booksReduser,
    searchReduser
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
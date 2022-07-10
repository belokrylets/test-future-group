import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReduser from "./redusers/booksSlice";
import currentBookReduser from "./redusers/currentBookSlice";
import searchReduser from "./redusers/searchSlice";

const rootReduser = combineReducers({
    booksReduser,
    searchReduser,
    currentBookReduser,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
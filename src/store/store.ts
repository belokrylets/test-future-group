import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducers/booksSlice";
import currentBookReducer from "./reducers/currentBookSlice";
import searchReducer from "./reducers/reducers";

const rootReducer = combineReducers({
    booksReducer,
    searchReducer,
    currentBookReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
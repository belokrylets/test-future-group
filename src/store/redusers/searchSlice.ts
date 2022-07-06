import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearch } from "../../types/search";

const initialState: ISearch = {
    searchLine: "",
    categories: "",
    sorting: "relevance"
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchInput(state, action: PayloadAction<string>) {
            state.searchLine = action.payload;
        },
        categorySelection(state, action: PayloadAction<string>) {
            state.categories = action.payload;
        },
        sortingSelection(state, action: PayloadAction<string>) {
            state.sorting = action.payload;
        },
    }
})

const searchReduser = searchSlice.reducer;
export default searchReduser;
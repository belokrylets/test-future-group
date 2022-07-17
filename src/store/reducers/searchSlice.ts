import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Search } from "../../types/search";

const initialState: Search = {
  searchLine: "",
  categories: "All",
  sorting: "relevance",
};

export const searchSlice = createSlice({
  name: "search",
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
  },
});

const searchReducer = searchSlice.reducer;
export default searchReducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks } from "../../action/fetchBooks";
import { BooksState, IBooks } from "../../types/books"

const initialState: BooksState = {
    books: {
        kind: "",
        totalItems: "",
        items: []
    },
    isLoading: false,
    error: ""
}

export const BooksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBooks.fulfilled.type]: (state, action: PayloadAction<IBooks>) => {
            state.isLoading = false;
            state.error = '';
            state.books = action.payload;
        },
        [fetchBooks.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchBooks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

const booksReduser = BooksSlice.reducer;

export default booksReduser;
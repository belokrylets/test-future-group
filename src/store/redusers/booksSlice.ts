import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks } from "../../action/fetchBooks";
import { fetchLoadMore } from "../../action/fetchLoadMore";
import { BooksState, IBooks } from "../../types/books"

const initialState: BooksState = {
    books: {
        kind: "",
        totalItems: "0",
        items: []
    },
    isLoading: false,
    error: "",
    startIndex: 30
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        changeStartIndex(state) {
            state.startIndex += 30
        }
    },
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
        [fetchLoadMore.fulfilled.type]: (state, action: PayloadAction<any[]>) => {
            state.books.items = [...state.books.items, ...action.payload]
        }
    }
})

const booksReduser = booksSlice.reducer;

export default booksReduser;
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchCurrentBook } from "../../action/fetchCurrentBook"
import { CurrentBookSliceState, ICurrentBook } from "../../types/currentBook"

const initialState: CurrentBookSliceState = {
    currentBook: {
        imageLinks: '',
        description: '',
        title: '',
        authors: [],
    },
    error: "",
    isLoading: false,
}
export const currentBookSlice = createSlice({
    name: 'currentBook',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCurrentBook.fulfilled.type]: (state, action: PayloadAction<ICurrentBook>) => {
            state.currentBook = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        [fetchCurrentBook.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        [fetchCurrentBook.pending.type]: (state) => {
            state.isLoading = true;
        },

    }
})

const currentBookReducer = currentBookSlice.reducer;
export default currentBookReducer;
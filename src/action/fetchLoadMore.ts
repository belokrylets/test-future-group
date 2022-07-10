import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLoadMore = createAsyncThunk(
    'books/fetchLoadMore',
    async (url: string, thunkApi) => {
        try {
            const response = await axios.get(url);
            const booksMore = response.data.items;
            console.log(booksMore)
            return booksMore;
        } catch (error) {
            return thunkApi.rejectWithValue('Ошибка загрузки выбранной книги')
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
    'books/fetchAll',
    async (url: string, thunkApi) => {
        try {
            const response = await axios.get(url);
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue('Ошибка загрузки списка книг')
        }
    },
)
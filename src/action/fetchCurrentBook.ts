import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentBook = createAsyncThunk(
    'books/fetchCurrentBook',
    async (url: string, thunkApi) => {
        try {
            const response = await axios.get(url);
            const link = response.data.volumeInfo.imageLinks.small.replace(/http/i, 'https');
            const result = {
                imageLinks: link,
                description: response.data.volumeInfo.description,
                title: response.data.volumeInfo.title,
                authors: response.data.volumeInfo.authors
            }
            return result;
        } catch (error) {
            return thunkApi.rejectWithValue('Ошибка загрузки выбранной книги')
        }
    }
)
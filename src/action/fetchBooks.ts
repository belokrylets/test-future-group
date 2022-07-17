import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrMessages } from "../ErrMessages";
import { Params } from "../types/params";

export const fetchBooks = createAsyncThunk(
  "books/fetchAll",
  async (params: Params, thunkApi) => {
    try {
      const categories = params.categories === "All" ? "" : params.categories;
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?",
        {
          params: {
            q: `${params.searchLine}+subject:${categories}`,
            startIndex: 0,
            maxResults: 30,
            orderBy: params.sorting,
            projection: "full",
            key: "AIzaSyA39t_avFLqtbtaPWC6eVhPCR9KN-iy1t8",
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(ErrMessages.fetchBooksError);
    }
  }
);

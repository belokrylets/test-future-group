import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrMessages } from "../ErrMessages";
import { Params } from "../types/params";

export const fetchLoadMore = createAsyncThunk(
  "books/fetchLoadMore",
  async (params: Params, thunkApi) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?",
        {
          params: {
            q: `${params.searchLine}+subject:${params.categories}`,
            startIndex: params.startIndex,
            maxResults: 30,
            orderBy: params.sorting,
            projection: "full",
            key: "AIzaSyA39t_avFLqtbtaPWC6eVhPCR9KN-iy1t8",
          },
        }
      );
      const booksMore = response.data.items;
      return booksMore;
    } catch (error) {
      return thunkApi.rejectWithValue(ErrMessages.fetchBooksError);
    }
  }
);

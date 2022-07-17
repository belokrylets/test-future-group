import React from "react";
import "../styles/searchResults.css";
import { useEffect } from "react";
import { fetchBooks } from "../action/fetchBooks";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Loading from "./Loading";
import BookList from "./BookList";

const SearchResults = () => {
  const dispatch = useAppDispatch();
  const { books, isLoading, error, startIndex } = useAppSelector((state) => state.booksReducer);
  const { searchLine, categories, sorting } = useAppSelector((state) => state.searchReducer);

  useEffect(() => {
    dispatch(fetchBooks({
      searchLine: searchLine,
      sorting: sorting,
      categories: categories
    }));
  }, [categories, sorting]);

  return (
    <>
      {isLoading ? <Loading /> : <BookList books={books} startIndex={startIndex} searchLine={searchLine} categories={categories} sorting={sorting} />}
      {error && <h1 className="errors">{error}</h1>}
    </>
  );
};

export default SearchResults;

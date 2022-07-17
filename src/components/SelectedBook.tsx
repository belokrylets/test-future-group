import React from "react";
import "../styles/selectedBook.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import Loading from "./Loading";

const SelectedBook = () => {
  const navigate = useNavigate();
  const { categories } = useAppSelector((state) => state.searchReducer);
  const { authors, title, imageLinks, description } = useAppSelector((state) => state.currentBookReducer.currentBook);
  const { isLoading, error } = useAppSelector((state) => state.currentBookReducer);

  const renderSelectedBook = (
    <div className="selectedBook">
      <div className="selectedBookImage">
        <img src={imageLinks} alt="" />
      </div>
      <div className="selectedBookInfo">
        <div className="path">
          <p onClick={() => navigate(-1)}>{categories}</p>
          <p>/</p>
          <p onClick={() => navigate("/")}>General</p>
        </div>
        <div className="selectedBookTitle">{title}</div>
        <div className="selectedBookAuthor">{authors.join(", ")}</div>
        <div className="selectedDescription">{description}</div>
      </div>
    </div>
  );
  return (
    <>
      {error && <h1 className="errors">{error}</h1>}
      {isLoading ? <Loading /> : renderSelectedBook}
    </>
  );
};

export default SelectedBook;

import React from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import logo from "../media/image/search.svg";
import Select from "./Select";
import { fetchBooks } from "../action/fetchBooks";
import { searchSlice } from "../store/reducers/searchSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const categoriesList = ["All", "Programming", "Computers", "Business", "Sales"];
  const sortList = ["relevance", "newest"];

  const { searchInput, categorySelection, sortingSelection } = searchSlice.actions;
  const { searchLine, categories, sorting } = useAppSelector((state) => state.searchReducer);

  const handleSearchInput = (e: { target: { value: string } }) => {
    dispatch(searchInput(e.target.value));
  };

  const selectCategories = (e: { target: { value: string } }) => {
    dispatch(categorySelection(e.target.value));
  };

  const selectSorting = (e: { target: { value: string } }) => {
    dispatch(sortingSelection(e.target.value));
  };

  const clickSearch = () => {
    dispatch(fetchBooks({
      searchLine: searchLine,
      sorting: sorting,
      categories: categories
    }));
    navigate("resultSearch")
  }
  return (
    <div className="header">
      <h1>Search for books</h1>
      <div className="textInput">
        <input type="text" placeholder="Поиск..." value={searchLine} onChange={handleSearchInput}
        />
        <div className="searchLogo" onClick={clickSearch}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="sort">
        <div className="categories">
          <Select label="Categories" onChange={selectCategories} options={categoriesList}
          />
        </div>
        <div className="sorting">
          <Select options={sortList} onChange={selectSorting} label={"Sorting by"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

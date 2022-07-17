import React from "react";
import "../styles/cardBook.css";
import { useNavigate } from "react-router-dom";
import { fetchCurrentBook } from "../action/fetchCurrentBook";
import { useAppDispatch } from "../hooks/redux";

interface CardBookProps {
  image: string;
  cardCategories: string;
  title: string;
  author: string;
  selfLink: string;
}
const CardBook = ({ image, cardCategories, title, author, selfLink }: CardBookProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const bookClick = () => {
    dispatch(fetchCurrentBook(`${selfLink}`));
    navigate("/bookpage");
  };
  return (
    <div className="cardBook" onClick={bookClick}>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="cardCategories">{cardCategories}</div>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </div>
  );
};

export default CardBook;

import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import Loading from "./Loading";

const SelectedBook = () => {
    const navigate = useNavigate();
    const { categories } = useAppSelector(state => state.searchReduser)
    const { authors, title, imageLinks, description } = useAppSelector(state => state.currentBookReduser.currentBook)
    const { isLoading, error } = useAppSelector(state => state.currentBookReduser);

    const renderSelecedBook = (
        <div className="selectedBook">
            <div className="selectedBookImage">
                <img src={imageLinks} alt="" />
            </div>
            <div className="selectedBookInfo">
                <div className="path">
                    <p onClick={() => navigate(-1)}>{categories}</p>
                    <p>/</p>
                    <p onClick={() => navigate('/')}>General</p>
                </div>
                <div className="selectedBookTitle">
                    {title}
                </div>
                <div className="selectedBookAuthor">
                    {authors.join(', ')}
                </div>
                <div className="selectedDescription">
                    {description}
                </div>
            </div>
        </div>
    )
    return (
        <>
            {error && <h1 className="erorrs">{error}</h1>}
            {isLoading ? <Loading /> : renderSelecedBook}
        </>

    )
}

export default SelectedBook;
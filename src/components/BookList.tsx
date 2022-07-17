import { has } from 'lodash';
import React from 'react'
import { fetchLoadMore } from '../action/fetchLoadMore';
import { useAppDispatch } from '../hooks/redux';
import { booksSlice } from '../store/reducers/booksSlice';
import { Books } from '../types/books';
import CardBook from './CardBook';

interface BookListProps {
    books: Books;
    startIndex: number;
    searchLine: string;
    categories: string;
    sorting: string;
}

const BookList = ({ books, startIndex, categories, searchLine, sorting }: BookListProps) => {
    const dispatch = useAppDispatch();

    const { changeStartIndex } = booksSlice.actions;

    const loadMoreClick = () => {
        dispatch(
            fetchLoadMore({
                searchLine: searchLine,
                startIndex: startIndex,
                sorting: sorting,
                categories: categories
            })
        );
        dispatch(changeStartIndex());
    };

    return (
        <>
            <div className="amount">Found {books.totalItems} results</div>
            <div className="books">
                {books.items.map(({ selfLink, volumeInfo, id }) => {
                    return (
                        <CardBook
                            key={id}
                            image={
                                has(volumeInfo, "imageLinks")
                                    ? volumeInfo.imageLinks.thumbnail
                                    : "https://dummyimage.com/130x170/a6a6ff"
                            }
                            cardCategories={categories}
                            title={volumeInfo.title}
                            author={volumeInfo.authors}
                            selfLink={selfLink}
                        />
                    );
                })}
            </div>
            <div className="button">
                <button className="buttonLoadMore" onClick={loadMoreClick}>
                    Load more
                </button>
            </div>
        </>
    )
}

export default BookList
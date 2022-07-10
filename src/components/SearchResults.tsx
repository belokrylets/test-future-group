import { useEffect } from "react"
import { fetchBooks } from "../action/fetchBooks"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import CardBook from "./CardBook"
import { uniqueId } from "lodash"
import Loading from "./Loading"
import { fetchLoadMore } from "../action/fetchLoadMore"
import { booksSlice } from "../store/redusers/booksSlice"

const SearchResults = () => {
    const dispatch = useAppDispatch()
    const { books, isLoading, error, startIndex } = useAppSelector(state => state.booksReduser);
    const { searchLine, categories, sorting } = useAppSelector(state => state.searchReduser)
    const { changeStartIndex } = booksSlice.actions;

    useEffect(() => {
        if (categories === 'All') {
            dispatch(fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=${searchLine}+subject:&startIndex=0&maxResults=30&orderBy=${sorting}&keyes&projection=full&key=AIzaSyA39t_avFLqtbtaPWC6eVhPCR9KN-iy1t8`))
        } else (
            dispatch(fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=${searchLine}+subject:${categories}&startIndex=0&maxResults=30&orderBy=${sorting}&keyes&projection=full&key=AIzaSyA39t_avFLqtbtaPWC6eVhPCR9KN-iy1t8`))
        )
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=${searchLine}+subject:${categories}&startIndex=0&maxResults=30&orderBy=${sorting}&keyes&projection=full&key=AIzaSyA39t_avFLqtbtaPWC6eVhPCR9KN-iy1t8`))
    }, [categories, sorting])

    const loadMoreClick = () => {
        dispatch(fetchLoadMore(`https://www.googleapis.com/books/v1/volumes?q=${searchLine}+subject:&startIndex=${startIndex}&maxResults=30&orderBy=${sorting}&keyes&projection=full&key=AIzaSyA39t_avFLqtbtaPWC6eVhPCR9KN-iy1t8`))
        dispatch(changeStartIndex())
    }

    const renderBooks = (
        <>
            <div className="amount">
                Found {books.totalItems} results
            </div>
            <div className="books">
                {books.items.map(({ selfLink, volumeInfo }) => {
                    return <CardBook
                        key={uniqueId()}
                        image={volumeInfo.hasOwnProperty('imageLinks') ? volumeInfo.imageLinks.thumbnail : 'https://dummyimage.com/130x170/a6a6ff'}
                        cardCategories={categories}
                        title={volumeInfo.title}
                        author={volumeInfo.authors}
                        selfLink={selfLink}
                    />
                })}
            </div>
            <div className="button">
                <button
                    className="buttonLoadMore"
                    onClick={() => loadMoreClick()}
                >Load more</button>
            </div>
        </>

    )

    return (
        <>
            {isLoading ? <Loading /> : renderBooks}
            {error && <h1 className="erorrs">{error}</h1>}

        </>

    )
}

export default SearchResults
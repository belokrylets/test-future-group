import { useEffect } from "react"
import { fetchBooks } from "../action/fetchBooks"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import CardBook from "./CardBook"
import { uniqueId } from "lodash"

const SearchResults = () => {
    const dispatch = useAppDispatch()
    const { books, isLoading, error } = useAppSelector(state => state.booksReduser);
    const {searchLine} = useAppSelector(state => state.searchReduser)
    console.log(searchLine)

    useEffect(() => {
        dispatch(fetchBooks(`https://www.googleapis.com/books/v1/volumes?q=${searchLine}:keyes&key=AIzaSyA39t_avFLqtbtaPWC6eVhPCR9KN-iy1t8`))
    }, [])

    return (
        <>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}
            <div className="amount">
                Found {books.totalItems} results
            </div>
            <div className="books">
                {books.items.map(({ volumeInfo }) => (
                    <CardBook key={uniqueId()} image={volumeInfo.imageLinks.thumbnail} cardCategories={"Computers"} title={volumeInfo.title} author={volumeInfo.authors} />
                ))}
            </div>
        </>

    )
}

export default SearchResults
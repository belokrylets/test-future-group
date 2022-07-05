import CardBook from "./CardBook"

const SearchResults = () => {
    return (
        <>
            <div className="amount">
                Found {} results
            </div>
            <div className="books">
                <CardBook image={""} cardCategories={""} title={""} author={""} />
            </div>
        </>

    )
}

export default SearchResults
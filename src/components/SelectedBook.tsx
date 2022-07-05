interface SelectedBookProps {
    selectedBookImage: string;
    path: string;
    selectedBookTitle: string;
    selectedBookAuthor: string;
    selectedDescription: string;
}
const SelectedBook = ({ selectedBookImage, path, selectedBookTitle, selectedBookAuthor, selectedDescription }: SelectedBookProps) => {
    return (
        <div className="selectedBook">
            <div className="selectedBookImage">
                <img src={selectedBookImage} alt="" />
            </div>
            <div className="selectedBookInfo">
                <div className="path">
                    {path}
                </div>
                <div className="selectedBookTitle">
                    {selectedBookTitle}
                </div>
                <div className="selectedBookAuthor">
                    {selectedBookAuthor}
                </div>
                <div className="selectedDescription">
                    {selectedDescription}
                </div>
            </div>
        </div>
    )
}

export default SelectedBook;
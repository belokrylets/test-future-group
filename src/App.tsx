import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import SelectedBook from "./components/SelectedBook";

const App = () => {
  return (
    <div>
      <Header />
      <SelectedBook selectedBookImage={""} path={""} selectedBookTitle={""} selectedBookAuthor={""} selectedDescription={""} />
    </div>
  );
}

export default App;

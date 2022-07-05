import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SearchResults from "./components/SearchResults";
import SelectedBook from "./components/SelectedBook";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="resultSearch" element={<SearchResults />} />
          <Route path="bookPage" element={<SelectedBook selectedBookImage={""} path={""} selectedBookTitle={""} selectedBookAuthor={""} selectedDescription={""} />} />
          <Route path="*" element={<h3>Ошибка 404. Страница не найдена</h3>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
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
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="resultSearch" element={<SearchResults />} />
          <Route path="bookPage" element={<SelectedBook />} />
          <Route path="*" element={<h3>Ошибка 404. Страница не найдена</h3>} />
        </Routes>
      </Router>
  );
}

export default App;

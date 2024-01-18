import { Fragment, useState } from "react";

// react components.
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import BooksGrid from "./components/BooksGrid";
import Footer from "./components/Footer";

// books data.
import data from "./data/books";

function App() {
  const [sortBy, setSortBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState(data);

  const searchBooks = (book) => {
    const bookName = book.name.toLocaleLowerCase();
    const keywords = searchTerm.trim().toLocaleLowerCase();

    return bookName.includes(keywords);
  };

  const sortBooks = (a, b) => {
    switch (sortBy) {
      case "year_asc":
        return a.publishYear - b.publishYear;
      case "year_desc":
        return b.publishYear - a.publishYear;
      case "name_asc":
        return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
      case "name_desc":
        return b.name.localeCompare(a.name, undefined, { sensitivity: "base" });
      default:
        return 0;
    }
  };

  const toggleFavorite = (bookId) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, isFavorite: !book.isFavorite };
      } else return { ...book };
    });

    setBooks(updatedBooks);
  };

  return (
    <Fragment>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <BooksGrid
          toggleFavorite={toggleFavorite}
          books={books.filter(searchBooks).sort(sortBooks)}
        />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;

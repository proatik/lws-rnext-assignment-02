// react components.
import Book from "./Book";

const BooksGrid = ({ books, toggleFavorite }) => {
  return (
    <div className="container grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <Book key={book.id} book={book} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
};

export default BooksGrid;

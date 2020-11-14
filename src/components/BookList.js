import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books, setBooks } = useContext(BookContext);

  return books.length ? (
    <div id="book-list" className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id}></BookDetails>;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books available!...</div>
  );
};

export default BookList;

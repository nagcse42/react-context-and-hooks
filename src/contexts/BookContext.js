import React, { createContext, useState } from "react";
import uuid from "uuid/dist/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Angular", author: "Google", id: 1 },
    { title: "Java", author: "Oracle", id: 2 },
    { title: "Python", author: "MicroSoft", id: 3 },
    { title: "React", author: "FaceBook", id: 4 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

import React, { createContext, useState, useReducer } from "react";
import { bookReducer } from "../reducers/booksReducer";

import uuid from "uuid/dist/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

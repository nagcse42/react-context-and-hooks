import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      id="book-list"
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ backgroundColor: theme.ui }}>Angular</li>
        <li style={{ backgroundColor: theme.ui }}>Java</li>
        <li style={{ backgroundColor: theme.ui }}>React</li>
      </ul>
    </div>
  );
};

export default BookList;

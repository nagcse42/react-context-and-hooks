import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return (
    <nav className="navbar">
      <h1>Available books list</h1>
      <p>We are having {books.length} books</p>
    </nav>
  );
};

export default NavBar;

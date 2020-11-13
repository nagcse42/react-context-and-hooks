import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
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
  }
}

export default BookList;

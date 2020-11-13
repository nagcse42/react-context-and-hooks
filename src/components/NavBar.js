import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class NavBar extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
        <h1>React Context</h1>
        <ul>
          <li style={{ backgroundColor: theme.ui }}>Home</li>
          <li style={{ backgroundColor: theme.ui }}>About</li>
          <li style={{ backgroundColor: theme.ui }}>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;

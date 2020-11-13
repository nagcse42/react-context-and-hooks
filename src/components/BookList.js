import React, { Component } from "react";

class BookList extends Component {
  state = {};
  render() {
    return (
      <div id="book-list" className="book-list">
        <ul>
          <li>Angular</li>
          <li>Java</li>
          <li>React</li>
        </ul>
      </div>
    );
  }
}

export default BookList;

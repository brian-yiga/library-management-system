import React from "react";

const BookList = ({ books, onToggleBorrow }) => {
  return (
    <div>
      <h2>Available Books</h2>
      <ul className="bookListContainer">
        {books.map((book) => (
          <li key={book.id} className="bookList">
            {book.title} by {book.author} -{" "}
            {book.available ? "Available" : "Borrowed"}
            <button onClick={() => onToggleBorrow(book.id)} className="borrowBtn">
              {book.available ? "Borrow" : "Return"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

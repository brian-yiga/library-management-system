import React from "react";

const BookList = ({ books, onToggleBorrow }) => {
  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} -{" "}
            {book.available ? "Available" : "Borrowed"}
            <button onClick={() => onToggleBorrow(book.id)}>
              {book.available ? "Borrow" : "Return"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

import React, { useState } from "react";

const AddBook = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    onAddBook({ title, author, available: true });
    setTitle("");
    setAuthor("");
  };

  return (
    <div className="addBook">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="bookForm">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="addBookBtn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;

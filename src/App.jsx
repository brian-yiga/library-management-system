import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import BookList from "./pages/BookList";
import UserList from "./pages/UserList";
import AddBook from "./components/AddBook";
import AddUser from "./components/AddUser";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/header";

const App = () => {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/books");
        console.log("Books API response:", response.data);
        setBooks(
          response.data.data.map((book) => ({
            id: book.id,
            title: book.title,
            author: book.author,
            available: book.available,
          }))
        );
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/members");
        console.log("Members API response:", response.data);
        setMembers(
          response.data.data.map((member) => ({
            id: member.id,
            name: member.name,
          }))
        );
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  const addBook = (book) => {
    setBooks([...books, { id: books.length + 1, ...book }]);
  };

  const addMember = (member) => {
    setMembers([...members, { id: members.length + 1, ...member }]);
  };

  const toggleBorrow = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id === bookId ? { ...book, available: !book.available } : book
      )
    );
  };

  return (
    <div className="appContainer">
      <Header />
      
      <nav>
        <Link to="/">Home</Link> |  
        <Link to="/books"> Books</Link> |  
        <Link to="/members"> Members</Link>
      </nav>

      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              <h1>Library Management System</h1>
              <h3>
                "A library is a paradise for the soul." <span>André Maurois</span>
              </h3>
              <AddBook onAddBook={addBook} />
              <AddUser onAddUser={addMember} />
            </div>
          } 
        />
        <Route 
          path="/books" 
          element={<BookList books={books} onToggleBorrow={toggleBorrow} />} 
        />
        <Route 
          path="/members" 
          element={<UserList members={members} />} 
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

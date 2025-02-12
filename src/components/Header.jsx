import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
        src="./src/assets/logo.png"
        alt="ABC Company Logo"
        className="logo"
      />
      <nav>
        <ul>
          <li className="navList">
            <NavLink to="/" className="navLink">
              Home
            </NavLink>
          </li>
          <li className="navList">
            <NavLink to="/books" className="navLink">
              Books
            </NavLink>
          </li>
          <li className="navList">
            <NavLink to="/members" className="navLink">
              Members
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

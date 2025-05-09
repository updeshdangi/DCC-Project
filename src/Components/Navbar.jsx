import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><a href="/"></a></div>
      <ul className="nav-links">
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/assingment">Assingment</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

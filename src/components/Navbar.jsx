import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Include a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        <Link to="/order-details" className="navbar-link">Order Details</Link> {/* Fixed link */}
      </div>
    </nav>
  );
};

export default Navbar;

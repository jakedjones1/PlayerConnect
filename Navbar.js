import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-blue.png";

function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Player Connect Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <div 
          className="nav-dropdown"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <span className="nav-link">About Us</span>
          <div className={`dropdown-content ${isAboutOpen ? 'show' : ''}`}>
            <Link to="/about/mission">Our Mission</Link>
            <Link to="/about/partners">Our Partners</Link>
            <Link to="/about/research">Our Research</Link>
          </div>
        </div>
        <div 
          className="nav-dropdown"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <span className="nav-link">Services</span>
          <div className={`dropdown-content ${isServicesOpen ? 'show' : ''}`}>
            <Link to="/services/clubs">For Clubs</Link>
            <Link to="/services/academy">For Academy Players</Link>
            <Link to="/services/retired">For Retired Players</Link>
          </div>
        </div>
        <Link to="/transfer-market" className="nav-link">Transfer Market</Link>
        <Link to="/community" className="nav-link">Community</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
      </div>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <div className="logged-in-container">
            <span className="nav-link">Logged In</span>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
        ) : (
          <Link to="/signin" className="nav-link">Sign In</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

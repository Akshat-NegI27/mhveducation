import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./Navbar.css";
import brandlogo from './brandlogo.png';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="logo-container">
        <div className="logo">
          <img src={brandlogo} alt="BlockChat Logo" className="logos" />
        </div>
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
<NavLink to="/Courses" className={({ isActive }) => (isActive ? "active" : "")}>Courses</NavLink>
<NavLink to="/Feestructure" className={({ isActive }) => (isActive ? "active" : "")}>Fee Structure</NavLink>
<NavLink to="/Blogs" className={({ isActive }) => (isActive ? "active" : "")}>Blogs</NavLink>
<NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
<NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>

      </div>
      <div className="navbar-actions">
                <Link to="/contact">
        <button className="btn-download">Enroll Today</button>
        </Link>
        
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;

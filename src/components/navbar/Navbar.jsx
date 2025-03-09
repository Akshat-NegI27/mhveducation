import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import brandlogo from './brandlogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo">
          <img src={brandlogo} alt="BlockChat Logo" className="logos" />
          {/* <div className="logo-icon">CM</div> */}
          {/* <div className="logo-text">BlockChat</div> */}
        </div>
      </div>

      <div className="navbar-links">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/Courses" activeClassName="active">Courses</NavLink>
        <NavLink to="/Feestructure" activeClassName="active">Fee Structure</NavLink>
        <NavLink to="/Blogs" activeClassName="active">Blogs</NavLink>
        <NavLink to="/About" activeClassName="active">About</NavLink>
        <NavLink to="/Contact" activeClassName="active">Contact Us</NavLink>
      </div>
      <div className="navbar-actions">
        <button className="btn-download">Enroll Today</button>
      </div>
    </nav>
  );
};

export default Navbar;

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

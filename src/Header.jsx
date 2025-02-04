import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>Prime Fiber</NavLink>
      </div>
      <nav className="header-nav">
        <NavLink to="/HomeBroadband" className={({ isActive }) => (isActive ? "active" : "")}>Home Broadband</NavLink>
        <NavLink to="/Bandwidth-For-Business" className={({ isActive }) => (isActive ? "active" : "")}>Bandwidth For Business</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
        <NavLink to="/contactus" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>Prime Fiber</NavLink>
      </div>
      <nav className="header-nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/HomeBroadband" className={({ isActive }) => (isActive ? "active" : "")}>Broadband For HomeUse</NavLink>
        <NavLink to="/Bandwidth-For-Business" className={({ isActive }) => (isActive ? "active" : "")}>Bandwidth For Business</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
        <NavLink to="/contactus" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
      </nav>
    </header>
  );
};

export default Header;

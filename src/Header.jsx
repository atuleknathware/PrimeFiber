import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [logo, setLogo] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/logo");
      console.log("API Response:", response.data);
      setLogo(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch data", { position: "top-right" });
      console.error(error);
    }
  };

  return (
    <header className="header">
      {/* Logo on the left */}
      <div className="header-left">
        <NavLink to="/" className="logo-link">
          <img src={logo.img} alt="User Logo" className="header-logo" />
        </NavLink>
      </div>

      {/* Navigation links */}
      <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/HomeBroadband"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Broadband For Home
        </NavLink>
        <NavLink
          to="/Bandwidth-For-Business"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Bandwidth For Business
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Services
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>
      </nav>

      {/* Toggle button on the right */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
};

export default Header;

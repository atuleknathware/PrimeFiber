import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    //Link To
    <header className="header">
      <div className="header-logo"> <a href='/' style={{textDecoration:"none",color:"white"}}>Prime Fiber</a></div>
      <nav className="header-nav">
        <Link to="/HomeBroadband">Home Broadband</Link>
        <Link to="/Bandwidth-For-Business">Bandwidth For Business</Link>
        <Link to="/services">Services</Link>
        <Link to="/contactus">Contact</Link>
        <Link to="/aboutus">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;

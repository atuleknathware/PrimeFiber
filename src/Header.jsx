import React from 'react';
import { NavLink  } from 'react-router-dom';

const Header = () => {
  return (
    //NavLink  To
    <header className="header">
      <div className="header-logo"> <a href='/' style={{textDecoration:"none",color:"white"}}>Prime Fiber</a></div>
      <nav className="header-nav">
        <NavLink  to="/HomeBroadband" activeClassName="active" >Home Broadband</NavLink >
        <NavLink  to="/Bandwidth-For-Business" activeClassName="active">Bandwidth For Business</NavLink >
        <NavLink  to="/services" activeClassName="active">Services</NavLink >
        <NavLink  to="/contactus" activeClassName="active">Contact</NavLink >
        <NavLink  to="/aboutus" activeClassName="active">About Us</NavLink >
      </nav>
    </header>
  );
};

export default Header;

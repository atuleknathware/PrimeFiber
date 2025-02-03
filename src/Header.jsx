import React from 'react';

const Header = () => {
  return (
    //Link To
    <header className="header">
      <div className="header-logo"> <a href='/' style={{textDecoration:"none",color:"white"}}>Prime Fiber</a></div>
      <nav className="header-nav">
        <a href="/HomeBroadband">Home Broadband</a>
        <a href="/Bandwidth-For-Business">Bandwidth For Business</a>
        <a href="/services">Services</a>
        <a href="/contactus">Contact</a>
        <a href="/aboutus">About Us</a>
      </nav>
    </header>
  );
};

export default Header;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/logo/getall");
        console.log("API Response:", response.data); // Log response
        setUsers(response.data.data); 
      } catch (error) {
        toast.error("Failed to fetch data", { position: "top-right" });
        console.error(error);
      }
    };
    fetchData();
  }, []);



  return (
    <header className="header">
      <div className="header-logo">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
      
        <table
        style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}
      >
       
       <tbody>
  {users.length > 0 ? (
    users.map((user) => (
      <tr key={user._id}>
        <td><img
              src={user.img}
            alt="User Logo"
            width="50"
            onError={(e) => (e.target.src = "/default-image.png")} // Fallback on error
          />
</td>
    
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="2">No users found</td>
    </tr>
  )}
</tbody>


      </table>

        
        
        </NavLink>
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

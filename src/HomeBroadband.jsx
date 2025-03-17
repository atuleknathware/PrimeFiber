import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import './HomeBroadband.css';
import Header from './Header';
import axios from 'axios';
import toast from 'react-hot-toast';

const HomeBroadband = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/plans/getAll");
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
    <>
     <Header/>
      {/* Hero Section */}
      <section className="hero-section9">
    <div className="text5">
        <h1><span className="highlight">Welcome to PrimeFiber</span></h1>
        <p style={{textAlign:"center"}}><span className="highlight" >Fast, Reliable, and Affordable Internet for Everyone!</span></p>
        <a href="tel:+91 9762039307" className="cta-button" style={{marginLeft:"45%"}}>
              <i className="fa-solid fa-phone"> 9762039307</i>
            </a>
    </div>
</section>

<section>
  <img src="src\images\OTT_NEW.webp" alt=""  style={{
              width: "250px",
              marginLeft: "40%",
              height: "150px",
              marginBottom: "10px",
              marginTop:"55px "
            }} />
</section>

<section>
  <h1>Plan For Home User</h1>
</section>

      {/* Internet Plans Section */}
      <section>
        <h2>Internet Plans</h2>

        <div className="container">
          <table>
            <thead>
              <tr>
              <th>Sr No</th>
                <th>Plan Name</th>
                <th>Plan Speed (MBPS)</th>
                <th>DATA</th>
                <th>1 Month</th>
                <th>3 Months</th>
                <th>6 Months</th>
                <th>12 Months</th>
                <th>OTT</th>
              </tr>
            </thead>
            <tbody>
  {Array.isArray(users) ? (
    users.map((user, index) => (
      <tr key={user._id}>
        <td>{index + 1}</td>
        <td>{user.planName}</td>
        <td>{user.planSpeed}</td>
        <td>{user.planData}</td>
        <td>{user.oneMonth}</td>
        <td>{user.threeMonth}</td>
        <td>{user.sixMonth}</td>
        <td>{user.twelveMonth}</td>
        <td>{user.ott}</td>
      </tr>
    ))
  ) : (
    <tr>
    </tr>
  )}
</tbody>
          </table>
        </div>
      </section>


      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Blazing Fast Internet Speeds</li>
          <li>24/7 Dedicated Customer Support</li>
          <li>Affordable Plans Tailored to Your Needs</li>
        </ul>
      </section>
      


      <Footer />
    </>
  );
};

export default HomeBroadband;

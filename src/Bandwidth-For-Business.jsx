import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Commercial.css"; // Ensure styles are properly linked
import Footer from "./Footer";
import Header from "./Header";
import MobileNo from "./MobileNo";

const Business = () => {
  const [users, setUsers] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}businessPlans/getall`
      );
      setUsers(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch data", { position: "top-right" });
      console.error(error);
    }
  };

  const fetchData1 = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}logo/`);
      setLogo(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch logos", { position: "top-right" });
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero-section1">
          <div className="text">
            <h1>
              <span className="highlight">Welcome to PrimeFiber</span>
            </h1>
            <p>
              <span className="highlight">
                Fast, Reliable, and Affordable Internet for Everyone!
              </span>
            </p>
            <div style={{ width: "400px", height: "200px" }}>
              <a href={`tel:+91${MobileNo}`} className="cta-button">
                <MobileNo />
              </a>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section>
          <h1>Bandwidth For Business</h1>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Plan Name</th>
                  <th>Plan Speed (MBPS)</th>
                  <th>DATA</th>
                  <th>3 Months</th>
                  <th>6 Months</th>
                  <th>12 Months</th>
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
                      <td>{user.threeMonth}</td>
                      <td>{user.sixMonth}</td>
                      <td>{user.twelveMonth}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No plans available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Partners Section */}
          <h3 className="partners-heading">Our Partners</h3>
          <section className="partners-section">
            <img
              className="partners-logo"
              src="src/logos/AsianHospital.jpg"
              alt="Asian Hospital"
            />
            <img
              className="partners-logo"
              src="src/logos/DhootHospital.jpg"
              alt="Dhoot Hospital"
            />
            <img
              className="partners-logo"
              src="src/logos/ENCORE.jpg"
              alt="ENCORE"
            />
            <img
              className="partners-logo"
              src="src/logos/Monginis.jpg"
              alt="Monginis"
            />
            <img
              className="partners-logo"
              src="src/logos/MYFM.jpg"
              alt="MYFM"
            />
          </section>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Blazing Fast Internet Speeds</li>
            <li>24/7 Dedicated Customer Support</li>
            <li>Affordable Plans Tailored to Your Needs</li>
          </ul>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Business;

import React, { useState } from "react";
import "./Commercial.css";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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
        "http://localhost:8080/api/businessPlans/getall"
      );
      console.log("API Response:", response.data); // Log response
      setUsers(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch data", { position: "top-right" });
      console.error(error);
    }
  };

  
  const fetchData1 = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/logo");
      console.log("API Response:", response.data); // Log response
      setLogo(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch data", { position: "top-right" });
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
            <a
              href="tel:+91 9762039307"
              className="cta-button"
              style={{ marginLeft: "8%" }}
            >
              <i className="fa-solid fa-phone"> 9762039307</i>
            </a>
          </div>
        </section>

        {/* Features Section */}

        {/* Plans Section */}
        <section>
          <h1> Bandwidth For Business</h1>

          <div className="container">
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
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
          <h3
            style={{
              marginTop: "100px",
            }}
          >
            Our Patners
          </h3>
          {/* <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <img
              className="patners-logo1"
              src="src\logos\AsianHospital.jpg"
              alt=""
            />
            <img
              className="patners-logo"
              src="src\logos\DhootHospital.jpg"
              alt=""
            />
            <img className="patners-logo2" src="src\logos\ENCORE.jpg" alt="" />
            <img className="patners-logo" src="src\logos\Monginis.jpg" alt="" />
            <img className="patners-logo1" src="src\logos\MYFM.jpg" alt="" />
          </section> */}
<section>
<tbody>
              <img
                src={logo.img}
                alt="User Logo"
                width="50"
                // onError={(e) => (e.target.src = "/default-image.png")} // Fallback on error
              />
            </tbody>
</section>

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
      </div>
    </>
  );
};

export default Business;

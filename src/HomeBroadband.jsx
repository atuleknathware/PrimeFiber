import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "./HomeBroadband.css";
import Header from "./Header";
import axios from "axios";
import toast from "react-hot-toast";
import MobileNo from "./MobileNo";

const HomeBroadband = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/plans/getAll"
        );
        console.log("API Response:", response.data);
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
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">PrimeFiber</span>
          </h1>
          <p>Fast, Reliable, and Affordable Internet for Everyone!</p>
          <a href={`tel:+91${MobileNo}`} className="cta-button">
            <MobileNo />
          </a>
        </div>
      </section>

      {/* OTT Banner */}
      <section>
        <img
          src="src/images/OTT_NEW.webp"
          alt="OTT Banner"
          className="ott-banner"
        />
      </section>

      {/* Plans Section */}
      <section className="plans-section">
        <h2>Plan For Home Users</h2>
      </section>

      {/* Internet Plans Section */}
      <section className="plans-table-section">
        <h2>Internet Plans</h2>
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Plan Name</th>
                <th>Speed (MBPS)</th>
                <th>Data</th>
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
                  <td colSpan="9">No plans available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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
    </>
  );
};

export default HomeBroadband;

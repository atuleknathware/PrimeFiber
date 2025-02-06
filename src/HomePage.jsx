import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import QueryForm from "./QueryForm"; // Assuming QueryForm component exists
import "./HomePage.css";
import "./Popup.css";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleFormSuccess = () => {
    setShowPopup(false); // Close the pop-up
    navigate("/"); // Navigate to home
  };

  return (
    <>
      <div className="homepage">
        <section className="hero-section">
          <div className="text">
            <h1>
              <span className="highlight">Welcome to PrimeFiber</span>
            </h1>
            <p>
              <span className="highlight">
                Fast, Reliable, and Affordable Internet for Everyone!
              </span>
            </p>
            <a href="tel:+91 9762039307" className="cta-button">
              <i className="fa-solid fa-phone"> 9762039307</i>
            </a>

            <a className="cta-button" onClick={() => setShowPopup(true)}>
              <i className="fa-solid fa-envelope"> Open Enquiry Form</i>
            </a>

            {showPopup && (
              <div className="popup-overlay">
                <div className="popup-content">
                  <button className="close-btn" onClick={() => setShowPopup(false)}>✖</button>
                  <QueryForm onSuccess={handleFormSuccess} />
                </div>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import QueryForm from "./QueryForm";
import "./HomePage.css";
import "./Popup.css";
import Header from "./Header";
import MobileNo from "./MobileNo";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="text9">
            <h1 style={{ marginTop: "40px" }}>
              <span className="highlight">Welcome to PrimeFiber</span>
            </h1>
            <p>
              <span className="highlight">
                Fast, Reliable, and Affordable Internet for Everyone!
              </span>
            </p>
            <div className="cta-container">
                <MobileNo />
              <button className="cta-button" onClick={() => setShowPopup(true)}>
                <i className="fa-solid fa-envelope"></i> Open Enquiry Form
              </button>
            </div>

            {/* Pop-up Form */}
            {showPopup && (
              <div className="popup-overlay">
                <div className="popup-content">
                  <button
                    className="close-btn"
                    onClick={() => setShowPopup(false)}
                  >
                    ✖
                  </button>
                  <QueryForm />
                </div>
              </div>
            )}
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

        {/* Service Details */}
        <section className="services-grid">
          {[
            {
              img: "./images/wi-fi-router-with-blue-optical-fiber.jpg",
              title: "Home Broadband",
              desc: "Experience speeds up to 400 Mbps.",
            },
            {
              img: "./images/office.jpg",
              title: "Bandwidth For Business",
              desc: "Guaranteed uptime, security & support.",
            },
            {
              img: "./images/pexels-feril-sunu-3332347-5648305.jpg",
              title: "Internet Lease Line",
              desc: "Custom high-speed connections.",
            },
          ].map((service, index) => (
            <div key={index} className="service-box">
              <img src={`${service.img}`} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </section>

        {/* Features Icons */}
        <section className="features-icons">
          <h1>Our Features</h1>
          <div className="icons-grid">
            {[
              { icon: "fa-star", text: "Seamless Connectivity" },
              { icon: "fa-phone", text: "24/7 Support" },
              { icon: "fa-charging-station", text: "Quick Installation" },
              { icon: "fa-rocket", text: "Fastest Service" },
              { icon: "fa-scale-balanced", text: "Flexible Bandwidth" },
            ].map((feature, index) => (
              <div key={index} className="icon-circle">
                <i className={`fa-solid ${feature.icon}`}></i>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Benefits */}
        <section className="boxes-container">
          {[
            {
              icon: "fa-headset",
              text: "Fast virtual assistants for accurate responses.",
            },
            {
              icon: "fa-house",
              text: "Smart home automation with reliable connectivity.",
            },
            { icon: "fa-gamepad", text: "Seamless online gaming experience." },
            { icon: "fa-music", text: "Stream multiple devices without lag." },
            {
              icon: "fa-wifi",
              text: "High-speed Wi-Fi for uninterrupted browsing.",
            },
            {
              icon: "fa-video",
              text: "Buffer-free HD video calls and streaming.",
            },
          ].map((benefit, index) => (
            <div key={index} className="box">
              <i className={`fa-solid ${benefit.icon}`}></i>
              <p>{benefit.text}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

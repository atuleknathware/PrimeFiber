import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import QueryForm from "./QueryForm"; // Assuming QueryForm component exists
import "./HomePage.css";
import "./Popup.css";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate("/services");
  };

  return (
    <>
      <div className="homepage">
        {/* Hero Section */}
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
              <i className="fa-solid fa-envelope">  Open Enquiry Form</i>
            </a>

            <div className="home-container" style={{ marginTop: "10px"}}>
              {/* <button className="open-popup-btn btn btn-primary" onClick={() => setShowPopup(true)}>
                Open Enquiry Form
              </button> */}

              {/* Pop-up Form */}
              {showPopup && (
                <div className="popup-overlay">
                  <div className="popup-content">
                    {/* Close Button */}
                    <button className="close-btn" onClick={() => setShowPopup(false)}>
                      ✖
                    </button>
                    <QueryForm />
                  </div>
                </div>
              )}
            </div>
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

        {/* Services Section */}
        <section className="services">
          <button
            style={{
              backgroundColor: "#003580",
              width: "176px",
              height: "30px",
              color: "white",
              marginTop: "55px",
              marginBottom: "55px",
            }}
            onClick={handleServicesClick}
          >
            Our Services
          </button>
          <h1>
            Surf the Web with Ease: Discover the Best Internet Services for You!
          </h1>
          <p>
            With cutting-edge technology and a commitment to seamless
            connectivity, these providers offer reliable, high-speed internet that
            keeps you connected and productive at all times.
          </p>
        </section>

        {/* Service Details Section */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <div style={{ width: "300px" }}>
            <img
              src={"./src/images/pexels-verma-harshil-4218546.jpg"}
              style={{ width: "300px" }}
              alt="Service Image"
            />
            <h2>Home Broadband</h2>
            <p>
              Experience lightning-fast internet speeds. Whether you're a casual
              user or a power user, we have plans for everyone from 50 Mbps to 400
              Mbps.
            </p>
          </div>

          <div style={{ width: "300px" }}>
            <img
              src={"./src/images/pexels-pixabay-159304.jpg"}
              style={{ width: "300px" }}
              alt="Service Image"
            />
            <h2>Bandwidth For Business</h2>
            <p>
              Bandwidth for business is more than just fast internet speeds. With
              features like guaranteed uptime, advanced security, and 24/7
              customer support.
            </p>
          </div>

          <div style={{ width: "300px" }}>
            <img
              src={"./src/images/pexels-brett-sayles-5326748.jpg"}
              style={{ width: "300px" }}
              alt="Service Image"
            />
            <h2>Internet Lease Line</h2>
            <p>
              High-speed internet that's customized to your exact needs, internet
              lease lines offer the ultimate in seamless connectivity for
              businesses that demand the best.
            </p>
          </div>
        </section>

        {/* Feature Icons */}
        <section className="services">
          <button
            style={{
              backgroundColor: "#003580",
              width: "176px",
              height: "30px",
              color: "white",
              marginTop: "55px",
            }}
          >
            Our Features
          </button>
          <div className="container">
            <div className="circle">
              <p>
                <i className="fa-solid fa-star"></i>
                <br />
                Seamless Internet Connectivity
              </p>
            </div>
            <div className="circle">
              <p>
                <i className="fa-solid fa-phone"></i>
                <br />
                24/7 Customer Support
              </p>
            </div>
            <div className="circle">
              <p>
                <i className="fa-solid fa-charging-station"></i>
                <br />
                Quick Installation
              </p>
            </div>
            <div className="circle">
              <p>
                <i className="fa-solid fa-rocket"></i>
                <br />
                Fastest Service
              </p>
            </div>
            <div className="circle">
              <p>
                <i className="fa-solid fa-scale-balanced"></i>
                <br />
                Flexible Bandwidth
              </p>
            </div>
          </div>
        </section>

        {/* Customer Benefits Section */}
        <section>
          <div className="boxes-container">
            <div className="box">
              <p>
                <i className="fa-solid fa-headset"></i>
                <br />
                With faster internet speeds from Prime Fiber, virtual assistants
                can quickly access and process large amounts of data, enabling them
                to provide you with more accurate and personalized responses to
                user queries.
              </p>
            </div>
            <div className="box">
              <p>
                <i className="fa-solid fa-house"></i>
                <br />
                Transform your home with Prime fiber internet’s fast, reliable, and
                secure connectivity for smart home automation and personalized
                living.
              </p>
            </div>
            <div className="box">
              <p>
                <i className="fa-solid fa-gamepad"></i>
                <br />
                Experience seamless and uninterrupted entertainment experience.
                Connect with multiple players online and conquer the digital world
                with superfast internet.
              </p>
            </div>
            <div className="box">
              <p>
                <i className="fa-solid fa-music"></i>
                <br />
                Prime Fiber supports multiple devices, allowing users to stream on
                multiple devices simultaneously without any loss in speed or
                quality.
              </p>
            </div>
            <div className="box">
              <p>
                <i className="fa-solid fa-wifi"></i>
                <br />
                Experience lightning-fast internet with PrimeFiber Stream, Connect,
                Play multi-level games online with Prime fiber that never slows down.
              </p>
            </div>
            <div className="box">
              <p>
                <i className="fa-solid fa-video"></i>
                <br />
                With faster internet speeds from PrimeFiber, virtual assistants can
                quickly access and process large amounts of data, enabling them to
                provide you with more accurate and personalized responses to user
                queries.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section style={{ display: "flex", marginTop: "55px" }}>
          <div>
            <button
              style={{
                backgroundColor: "#003580",
                width: "176px",
                height: "30px",
                color: "white",
                marginBottom: "25px",
                marginLeft: "95px",
              }}
            >
              Why Choose Us
            </button>
            <div style={{ marginLeft: "100px" }}>
              <h1>Explore The Best Of Digital World</h1>
              {/* <i className="fa-solid fa-greater-than"></i> */}
              <h3>Lightning-Fast Speeds</h3>
              <p>Enjoy speeds ranging from 50 Mbps to 400 Mbps and beyond.</p>
              {/* <i className="fa-solid fa-greater-than"></i> */}
              <h3>Unparalleled Reliability</h3>
              <p>Count on 24/7 monitoring for uninterrupted internet access.</p>

              {/* <i className="fa-solid fa-greater-than"></i> */}
              <h3>Advanced Security</h3>
              <p>
                Protect your online activity and data with advanced security
                features.
              </p>
              {/* <i className="fa-solid fa-greater-than"></i> */}
              <h3>Dedicated Customer Support</h3>
              <p>Get the help you need with dedicated customer support.</p>
              {/* <i className="fa-solid fa-greater-than"></i> */}
              <h3>Flexible Plans</h3>
              <p>
                Choose from a range of plans to fit your budget and requirements.
              </p>
            </div>
          </div>
          <div>
            <img
              src="src/images/laptop-which-there-is-world-people-drawn.jpg"
              alt="Digital World"
              style={{
                width: "500px",
                marginLeft: "100px",
                height: "380px",
                marginBottom: "60px",
                marginTop: "55px",
              }}
            />
          </div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;

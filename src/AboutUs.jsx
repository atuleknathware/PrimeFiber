import React from "react";
import "./Aboutus.css";
import Footer from "./Footer";
import Header from "./Header";
import MobileNo from "./MobileNo";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero-section3">
          <div className="text1" style={{ marginTop: "50px" }}>
            <h1>
              <span className="highlight">About Us</span>
            </h1>
            <p>
              <span className="highlight">
                Connect to a fast and reliable internet connection anywhere
              </span>
            </p>
            <a href={`tel:+91${(<MobileNo />)}`} className="cta-button">
              <div style={{ position: "inline" }}>{<MobileNo />}</div>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="about-container">
          <div className="about-text">
            <button className="btn btn-primary">Who we are</button>
            <h2>About PrimeFiber Media Pvt Limited</h2>
            <p>
              PrimeFiber Media Pvt Limited is one of the leading Internet
              Service Providers (ISP) in Maharashtra. We are a vibrant, dynamic,
              and innovative team with years of experience in building
              next-generation networks. We provide advanced multi-service access
              solutions, ensuring a smooth transition from traditional networks
              to cutting-edge technology.
              <br />
              <br />
              Our skilled engineers and expert teams ensure seamless
              installations and efficient servicing. We also offer best-in-class
              enterprise solutions to corporates and other ISPs with secure,
              flexible, and robust services.
            </p>
          </div>
          <div className="about-image">
            <img
              src="../src/images/laptop-which-there-is-world-people-drawn.jpg"
              alt="About PrimeFiber"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="features-container">
          <div className="box">
            <i className="fa-solid fa-globe"></i>
            <h5>Wide Coverage</h5>
            <p>
              We provide internet services across Maharashtra, covering both
              urban and rural areas.
            </p>
          </div>
          <div className="box">
            <i className="fa-solid fa-rocket"></i>
            <h5>Cutting-Edge Technology</h5>
            <p>
              We ensure lightning-fast internet speeds with the latest
              technology.
            </p>
          </div>
          <div className="box">
            <i className="fa-solid fa-headset"></i>
            <h5>24/7 Customer Support</h5>
            <p>
              Our team is available round-the-clock to assist with any queries
              or technical issues.
            </p>
          </div>
        </section>

        {/* Quality Service Section */}
        <section className="quality-service">
          <h2>Providing Quality Internet Service</h2>
          <div className="quality-container">
            <div className="quality-box">
              <h5>Experienced NOC</h5>
              <p>
                We ensure the best available routes to any destination
                worldwide.
              </p>
            </div>
            <div className="quality-box">
              <h5>Dedicated Monitoring</h5>
              <p>
                Continuous monitoring for improved performance and quick issue
                resolution.
              </p>
            </div>
            <div className="quality-box">
              <h5>Best Tools</h5>
              <p>We deploy industry-leading monitoring software tools.</p>
            </div>
            <div className="quality-box">
              <h5>Reduced Downtime</h5>
              <p>
                Minimizing service downtime for a seamless internet experience.
              </p>
            </div>
          </div>
          <div className="quality-image">
            <img
              src="../src/images/pexels-thirdman-5583254.jpg"
              alt="Quality Service"
            />
          </div>
        </section>

        {/* Offer Section */}
        <section className="offer-section">
          <img
            src="../src/images/pexels-verma-harshil-4218546.jpg"
            alt="Prime Fiber Offer"
          />
          <div>
            <h5>
              A simple, reliable, and affordable solution for unlimited internet
              access
            </h5>
            <p>
              Get insights on offers, latest plans, and prompt customer service
              with PrimeFiber Media Pvt Ltd.
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;

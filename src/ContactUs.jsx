import React from "react";
import "./ContactUs.css";
import QueryForm from "./QueryForm";
import Footer from "./Footer";
import Header from "./Header";
import MobileNo from "./MobileNo";
import MobileNotwo from "./MobileNotwo";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero-section2">
          <div className="text3">
            <h1>
              <span className="highlight">Contact Us</span>
            </h1>
            <p>
              <span className="highlight">We would love to hear from you</span>
            </p>
            <div style={{ width: "400px" }}>
             <MobileNo />
            </div>
          </div>
        </section>

        <h1 style={{ marginTop: "25px", textAlign: "center" }}>Get in Touch</h1>

        {/* Contact Details Section */}
        <div className="contact-container">
          <section className="features-section5">
            <div className="box">
              <i className="fa-brands fa-leanpub feature-icons"></i>
              <h5>Learn More About PrimeFiber</h5>
              <p>
                We would love to hear from you. Fill in the form to get in touch
                with our executive.
              </p>
            </div>
            <div className="box">
              <i className="fa-solid fa-location-dot feature-icons"></i>
              <h5>Head Office</h5>
              <p>
                F/12, Arihant Nagar, Jawahar Colony, Sindhi Colony, Chhatrapati
                Sambhaji Nagar, Maharashtra 431001
              </p>
            </div>
            <div className="box">
              <i className="fa-solid fa-phone-volume feature-icons"></i>
              <h5>Phone Number</h5>
             
               Always available for assistance. We are more than happy to help you.
            </div>
            <div className="box">
              <i className="fa-solid fa-envelope feature-icons"></i>
              <h5>Email Us</h5>
              <p>admin@primefibermedia.in</p>
            </div>
          </section>
        </div>

        {/* Query Form */}
        <section>
          <QueryForm />
        </section>

        {/* Offer Section */}
        <section className="offer-section">
          <img
            src="./images/pexels-verma-harshil-4218546.jpg"
            alt="Prime Fiber Offer"
          />
          <div>
            <h5>
              A simple, reliable and affordable solution for unlimited internet
              access
            </h5>
            <p>
              Get insights on offers, latest plans, and prompt customer service
              with Prime Fiber Media Pvt.
            </p>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="map-container">
          <iframe
            title="Prime Fiber Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2384552443164!2d75.34097777499886!3d19.872150481503397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba362a1ed5a23%3A0x9914c9b8cabf575!2sPrimefiber%20Media%20Pvt%20Ltd!5e0!3m2!1smr!2sin!4v1738653414316!5m2!1smr!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

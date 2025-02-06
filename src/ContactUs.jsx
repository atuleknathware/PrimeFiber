import React from "react";
import "./ContactUs.css";
import QueryForm from "./QueryForm";
import Footer from "./Footer";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const ContactUs = () => {
  return (
    <>
      <div className="homepage">
        <section className="hero-section2" style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
          <div className="text">
            <h1><span className="highlight">Contact Us</span></h1>
            <p><span className="highlight">We would love to hear from you</span></p>
            <button className="cta-button">
              <i className="fa-solid fa-phone"> 9762039307</i>
            </button>
          </div>
        </section>

        <button className="btn btn-primary" style={{ marginTop: "25px" }}>Get in Touch</button>

        <div style={{ display: "flex", justifyContent: "space-evenly", alignContent: "center" }}>
          <section className="features-section5" style={{ display: "flex", width: "1200px" }}>
            <div className="box">
              <div>
                <h5>Learn More About PrimeFiber</h5>
                <p>We would love to hear from you, fill in the form to get in touch with our executive.</p>
              </div>
            </div>
            <div className="box">
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <h5>Head Office</h5>
                <p>F/12, Arihant Nagar, Jawahar Colony, Sindhi Colony, Chhatrapati Sambhaji Nagar, Maharashtra 431001</p>
              </div>
            </div>
            <div className="box">
              <div>
                <i className="fa-solid fa-phone-volume"></i>
                <h5>Phone Number</h5>
                <p>9762131385 (Customer Care)</p>
                <p>+919762039307 (24/7) (Missed call Number)</p>
              </div>
            </div>
            <div className="box">
              <div>
                <i className="fa-solid fa-envelope"></i>
                <h5>Email Us</h5>
                <p>admin@primefibermedia.in</p>
              </div>
            </div>
          </section>
        </div>

        <section>
          <QueryForm />
        </section>

        <section>
          <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#ffea00", color: "black", fontWeight: "bold", width: "1000px", marginLeft: "12%" }}>
            <img src="src\images\pexels-verma-harshil-4218546.jpg" alt="Prime Fiber Offer" style={{ width: "150px" }} />
            <h5>A simple, reliable and affordable solution for unlimited internet access</h5>
            <p>Get insights on offers, latest plans and prompt customer service with Prime Fiber Media Pvt.</p>
          </div>
        </section>

        <section style={{ marginTop: "25px" }}>
          <iframe 
            title="Prime Fiber Location"
            style={containerStyle} 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2384552443164!2d75.34097777499886!3d19.872150481503397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba362a1ed5a23%3A0x9914c9b8cabf575!2sPrimefiber%20Media%20Pvt%20Ltd!5e0!3m2!1smr!2sin!4v1738653414316!5m2!1smr!2sin" 
            width="600" 
            height="450"  
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>


      </div>
      <Footer/>

    </>
  );
};

export default ContactUs;

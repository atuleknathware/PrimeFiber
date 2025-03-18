import React from "react";
import "./Services.css"; // Import the external CSS file
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import MobileNo from "./MobileNo.jsx";

const Services = () => {
  return (
    <>
      <Header />
      <section className="hero-section10">
        <div className="text">
          <h1>
            <span className="highlight">Welcome to PrimeFiber</span>
          </h1>
          <p style={{ textAlign: "center" }}>
            <span className="highlight">
              Fast, Reliable, and Affordable Internet for Everyone!
            </span>
          </p>
          <div style={{ width: "400px", height: "200px" }}>
            <a href={`tel:+91${(<MobileNo />)}`} className="cta-button">
              {<MobileNo />}
            </a>
          </div>
        </div>
      </section>

      <div style={{ display: "flex" }}>
        {/* <h1 style={{margin:"4% auto"}}>Our Service</h1> */}
      </div>
      <h1 style={{ margin: "4% auto" }}>
        Explore the next ISP unlimited possibilities
      </h1>

      <div className="service-container">
        <div className="box">
          <div>
            <h5>Broadband</h5>
            <p>Experience lightning-fast broadband connectivity...</p>
            {/* <button className="btn btn-primary">Enquire Now</button> */}
          </div>
        </div>

        <div className="box">
          <div>
            <h5>Leased Line</h5>
            <p>Unlock unparalleled reliability and dedicated bandwidth...</p>
            {/* <button className="btn btn-primary">Enquire Now</button> */}
          </div>
        </div>

        <div className="box">
          <div>
            <h5>OTT Services</h5>
            <p>Access a diverse range of Over-The-Top (OTT) services...</p>
            {/* <button className="btn btn-primary">Enquire Now</button> */}
          </div>
        </div>

        <div className="box">
          <div>
            <h5>Telephone Line</h5>
            <p>Stay connected with our dependable telephone line service...</p>
            {/* <button className="btn btn-primary">Enquire Now</button> */}
          </div>
        </div>

        <div className="box">
          <div>
            <h5>Cloud & Hosting</h5>
            <p>Empower your online endeavors with robust cloud solutions...</p>
            {/* <button className="btn btn-primary">Enquire Now</button> */}
          </div>
        </div>
      </div>

      <h2>Our Plans</h2>
      <div className="plan">
        <h2>OTT Bundle (Basic) + WIFI</h2>
        <ul>
          <li>150+ FTA TV Channels</li>
          <li>ANO Play App</li>
          <li>Fiber Connection</li>
          <li>Up to 200 Mbps Broadband Speed</li>
          <li>Made for 1-5 devices</li>
          <li>Upto 6+ OTT Apps (Hotstar, Sony Live, Zee5, etc)</li>
        </ul>
      </div>

      <div className="plan">
        <h2>OTT Bundle (Super) + WIFI</h2>
        <ul>
          <li>150+ FTA TV Channels</li>
          <li>ANO Play App</li>
          <li>Fiber Connection</li>
          <li>Up to 300 Mbps Broadband Speed</li>
          <li>Made for 5-10 devices</li>
          <li>Upto 6+ OTT Apps (Hotstar, Sony Live, Zee5, etc)</li>
        </ul>
      </div>

      <div className="plan">
        <h2>OTT Bundle (Advance) + WIFI</h2>
        <ul>
          <li>150+ FTA TV Channels</li>
          <li>ANO Play App</li>
          <li>Fiber Connection</li>
          <li>Up to 400 Mbps Broadband Speed</li>
          <li>Made for 10-20 devices</li>
          <li>Upto 6+ OTT Apps (Hotstar, Sony Live, Zee5, etc)</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Services;

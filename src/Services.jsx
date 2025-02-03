import React from "react";
import "./Services.css"; // Import the external CSS file

const Services = () => {
  return (
    <>
      <button className="service-btn" style={{marginLeft:"45%",marginTop:"45px"}}>Our Service</button>
      <h1>Explore the next ISP unlimited possibilities</h1>

      <div className="service-container">
        <div className="box">
          <div>
          <h5>Broadband</h5>
          <p>Experience lightning-fast broadband connectivity...</p>
          <button>Enquire Now</button>
          </div>
        </div>

        <div className="box">
          <div>
          <h5>Leased Line</h5>
          <p>Unlock unparalleled reliability and dedicated bandwidth...</p>
          <button>Enquire Now</button>
          </div>
        </div>

        <div className="box">
          <div>
          <h5>OTT Services</h5>
          <p>Access a diverse range of Over-The-Top (OTT) services...</p>
          <button>Enquire Now</button>
          </div>
        </div>

        <div className="box">
          <div>
          <h5>Telephone Line</h5>
          <p>Stay connected with our dependable telephone line service...</p>
          <button>Enquire Now</button>
          </div>
        </div>

        <div className="box">
          <div>
          <h5>Cloud & Hosting</h5>
          <p>Empower your online endeavors with robust cloud solutions...</p>
          <button>Enquire Now</button>
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
    </>
  );
};

export default Services;

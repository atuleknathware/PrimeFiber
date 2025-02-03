import React from "react";
import "./ContactUs.css";
import QueryForm from "./QueryForm";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
  };
  
  const center = {
    lat: 19.8663876, // Replace with your latitude
    lng: 75.3474575, // Replace with your longitude
  };

const ContactUs = () => {
  return (
    <>





      <div className="homepage">
        <section className="hero-section2" style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
          <div className="text">
            <h1>
              <span className="highlight">Contact Us</span>
            </h1>
            <p>
              <span className="highlight">We would love to hear from you</span>
            </p>
            <button className="cta-button">
              <i className="fa-solid fa-phone"> 9762039307</i>
            </button>
          </div>

          
        </section>
        <button className="btn btn-primary" style={{marginTop:"25px"}}>Get in Touch</button>

        <div style={{display:"flex", justifyContent:"space-evenly",alignContent:"center"}}>

        {/* Features Section */}
 {/* <div className="box">
                <div>
                <i class="fa-solid fa-headset"></i>
              <h5>Customer Service</h5>
              <p>
                At Prime Fiber, we put our customers first, and our team of
                dedicated customer support executives is available 24/7 to
                resolve any issues and provide personalized support.
              </p>
              </div>
            </div> */}
          
        <section className="features-section5" style={{display:"flex", width:"1200px"}}>
            <div className="box">
                <div>
          <h5>Learn More About PrimeFiber</h5>
          <p>We would love to hear from you, fill in the form to get in touch with our executive.</p>
          </div>
          </div>
            <div className="box">
                <div>
          <i class="fa-solid fa-location-dot"></i>
          <h5>Head Office</h5>
          <p>F/12, Arihant Nagar, Jawahar Colony, Sindhi Colony, Chhatrapati Sambhaji Nagar, Maharashtra 431001</p>
          </div>
          </div>
          <div className="box">
            <div>
          <i class="fa-solid fa-phone-volume"></i>
          <h5>Phone Number</h5>
          <p>02061930306 (Customer Care)</p>
          <p>+919762039307(24/7) (Missed call Number)</p>
          </div>
          </div>

          <div className="box">
            <div>
            <i class="fa-solid fa-envelope"></i>
          <h5>Email Us</h5>
          <p>admin@primefibermedia.in</p>
          {/* <p>admin@primefibermedia.in</p> */}
          </div>
          </div>

        </section>

        {/* <section className="box" style={{marginTop:"100px", width:"650px", height:"500px"}}>
            <QueryForm/>
        </section> */}
        </div>

        <section>
            <QueryForm/>    
        </section>
        <section>
            <div style={{display:"flex", justifyContent:"space-evenly",alignItems:"center", backgroundColor:"#ffea00",color:"black",fontWeight:"bold", width:"1000px", marginLeft:"12%"}}>
                <img src="src\images\pexels-verma-harshil-4218546.jpg" alt="" style={{width:"150px"}}/>
                <h5>A simple, reliable and affordable solution for unlimited internet access</h5>
               <p> Get insights on offers, latest plans and prompt customer service with Gazon India.</p>
            </div> 
        </section>


        {/* Plans Section */}

        {/* Footer Section */}

        <section>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
        </section>

        
        <footer className="footer">
          <p>© 2025 SpeedNet. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default ContactUs;

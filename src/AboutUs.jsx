import React from "react";
import "./Aboutus.css";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <div className="homepage">
        <section
          className="hero-section3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div className="text">
            <h1>
              <span className="highlight">About Us</span>
            </h1>
            <p>
              <span className="highlight">
                Connect to a fast and reliable internet connection anywhere
              </span>
            </p>
          </div>
        </section>

        <section>
          {/* Features Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignContent: "center",
              marginTop: "25px",
            }}
          >
            <div style={{ width: "740px", marginTop:"65px" }}>
              <button className="btn btn-primary">Who we are</button>
              <h2>About Primefibre media pvt limited</h2>
              <p>
              Primefibre media pvt limited is one of the leading Internet Service Provider
                (ISP) company in Maharashtra. We are a vibrant, dynamic and
                innovative team, with years of experience in building
                next-generation networks. We pride ourselves on delivering
                advanced multi-service access solutions, ensuring a smooth
                transition from traditional access networks to cutting-edge
                network architecture. Since our inception, we have built a
                reputation for providing unparalleled service and unbeatable
                content. Armed with the most advanced technology, we have spread
                our wings to cater to a vast cluster of subscribers across
                Maharashtra and are continually expanding to reach more
                areas within the state. Our skilled engineers and expert teams
                are the backbone of our success, ensuring seamless installation
                of our services at customer locations and efficiently servicing
                the network in their respective areas.We don’t just cater to
                individuals, but also offer best-in-class enterprise solutions
                to corporate and other ISPs. Our IP-based secure, flexible and
                robust services have set a new benchmark in the industry. So,
                join hands with us, and experience the ultimate internet
                experience, backed by the Prime Fiber promise of quality and
                innovation.
              </p>
            </div>
            <div>
              <img
                src="src/images/wi-fi-router-with-blue-optical-fiber.jpg"
                alt=""
                style={{ width: "345px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignContent: "center",
              marginTop: "25px",
            }}
          >
            <div className="box">
                <div>
                <i class="fa-solid fa-globe"></i>
              <h5>Wide Coverage</h5>
              <p>
                We have a vast network that covers a significant portion of
                Maharashtra, providing internet services to both urban and rural
                areas.
              </p>
              </div>
            </div>
            <div className="box">
                <div>
                <i class="fa-solid fa-rocket"></i>
              <h5>Cutting-Edge Technology</h5>
              <p>
                We use the latest technology to provide lightning-fast internet
                speeds, ensuring that our customers have the best online
                experience.
              </p>
              </div>
            </div>

            <div className="box">
                <div>
                <i class="fa-solid fa-headset"></i>
              <h5>Customer Service</h5>
              <p>
                At Prime Fiber, we put our customers first, and our team of
                dedicated customer support executives is available 24/7 to
                resolve any issues and provide personalized support.
              </p>
              </div>
            </div>

           
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignContent: "center",
              marginTop: "25px",
            }}
          >
            <div className="box">
                <div>
                <i class="fa-solid fa-eye"></i>
              <h5>Our Vision</h5>
              <p>
                Our vision is to be the leading internet service provider in
                India, renowned for our cutting-edge technology, exceptional
                customer service, and commitment to excellence. We aim to
                connect every corner of the country with lightning-fast internet
                services, enabling people to work, learn, and communicate
                seamlessly.
              </p>
              </div>
            </div>

            <div className="box">
                <div>
                <i class="fa-solid fa-bullseye"></i>
              <h5>Our Mission </h5>
              <p>
                At Primefibre media pvt limited, our mission is to provide innovative, reliable, and
                high-quality internet services that empower individuals and
                businesses to connect, collaborate, and grow. We strive to
                exceed our customers' expectations by constantly innovating and
                adapting to meet their changing needs.
              </p>
              </div>
            </div>

            <div className="box">
                <div>
                <i class="fa-solid fa-lightbulb"></i>
              <h5>Our Values </h5>
              <p>
                At Primefibre media pvt limited, we are driven by a set of core values that guide
                us in everything we do. These values include being customer
                centric, innovation, integrity, teamwork and social
                responsibilty.
              </p>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "black",
            marginTop: "40px",
          }}
        >
          <div>
            <img
              src="src\images\data-cables-room.jpg"
              alt=""
              style={{ width: "730px", height: "384px" }}
            />
            </div>
            <div>
            <div>
              <h4>Providing Quality Internet Service </h4>
              <div>
                <h5>Experienced NOC</h5> 
                <p>
                  Multiple upstream provider, best available routes to any
                  destination world wide
                </p>
              </div>
            </div>

            <div>
              <div>
                <h5>Dedicated Monitoring</h5>

                <p>
                  Multiple upstream provider, best available routes to any
                  destination world wide
                </p>
              </div>
            </div>

            <div>
              <div>
                <h5>Best Tools </h5>

                <p>We deploy best monitoring software tools available.</p>
              </div>
            </div>

            <div>
              <div>
                <h5>Reduce Service</h5>

                <p>This reduce the service downtime in the network.</p>
              </div>
            </div>
            </div>
        </section>

        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "#ffea00",
              color: "black",
              fontWeight: "bold",
            //   width: "1000px",
            //   margintop: "50px",
            }}
          >
            <img
              src="src\images\pexels-verma-harshil-4218546.jpg"
              alt=""
              style={{ width: "150px" }}
            />
            <h5>
              A simple, reliable and affordable solution for unlimited internet
              access
            </h5>
            <p>
              Get insights on offers, latest plans and prompt customer service
              with Primefibre media pvt limited
            </p>
          </div>
        </section>

        {/* Plans Section */}

        {/* Footer Section */}
        <Footer/>

      </div>
    </>
  );
};

export default AboutUs;

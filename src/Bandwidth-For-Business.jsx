import React from "react";
import './Commercial.css'

const Business = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section1">
    <div className="text">
        <h1><span className="highlight">Welcome to PrimeFiber</span></h1>
        <p><span className="highlight">Fast, Reliable, and Affordable Internet for Everyone!</span></p>
        <button className="cta-button">
            <i className="fa-solid fa-phone"> 9762039307</i>
        </button>
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

      {/* Plans Section */}
      <section className="plans-section">
        <h2>Our Plans</h2>
        <div className="plan-cards">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <p>Speed: Up to 50 Mbps</p>
            <p>Price: ₹2649/month</p>
            <button className="plan-button">Choose Plan</button>
          </div>
          <div className="plan-card">
            <h3>Pro Plan</h3>
            <p>Speed: Up to 150 Mbps</p>
            <p>Price: ₹3999/month</p>
            <button className="plan-button">Choose Plan</button>
          </div>
          <div className="plan-card">
            <h3>Ultra Plan</h3>
            <p>Speed: Up to 500 Mbps</p>
            <p>Price: ₹4999/month</p>
            <button className="plan-button">Choose Plan</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 SpeedNet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Business;

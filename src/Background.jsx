import React from 'react';
import './Background.css'

const Background = () => {
  return (
    <div className="app">
      <main className="main-content">
        <section className="welcome-section">
          <h1>Welcome to ISP Company</h1>
          <p>
            Experience lightning-fast internet speeds, reliable connectivity, and affordable plans tailored for you.
          </p>
        </section>
        <section className="features-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Blazing Fast Internet</li>
            <li>24/7 Customer Support</li>
            <li>Affordable and Flexible Plans</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>© 2025 ISP Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Background;

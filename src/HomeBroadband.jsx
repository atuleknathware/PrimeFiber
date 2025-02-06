import React from 'react';
import Footer from './Footer';
import './HomeBroadband.css';

const HomeBroadband = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section9">
    <div className="text">
        <h1><span className="highlight">Welcome to PrimeFiber</span></h1>
        <p style={{textAlign:"center"}}><span className="highlight" >Fast, Reliable, and Affordable Internet for Everyone!</span></p>
        <button className="cta-button" style={{marginLeft:"45%"}}>
            <i className="fa-solid fa-phone"> 9762039307</i>
        </button>
    </div>
</section>

<section>
  <img src="src\images\OTT_NEW.webp" alt=""  style={{
              width: "250px",
              marginLeft: "40%",
              height: "150px",
              marginBottom: "10px",
              marginTop:"55px "
            }} />
</section>

<section>
  <h1>Plan For Home User</h1>
</section>

      {/* Internet Plans Section */}
      <section>
        <h2>Internet Plans</h2>

        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Plan Speed (MBPS)</th>
                <th>DATA</th>
                <th>1 Month</th>
                <th>3 Months</th>
                <th>6 Months</th>
                <th>12 Months</th>
                <th>OTT</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Prime HD1', '40 MBPS', 'Unlimited', '₹499', '₹1497', '₹2994', '₹5988', 'X'],
                ['Prime HD2', '75 MBPS', 'Unlimited', '₹650', '₹1950', '₹3900', '₹7800', 'X'],
                ['Prime HD3', '100 MBPS', 'Unlimited', '₹700', '₹2100', '₹4200', '₹8400', 'X'],
                ['Prime HD4', '150 MBPS', 'Unlimited', '₹799', '₹2397', '₹4794', '₹9588', 'X'],
                ['Prime HD5', '200 MBPS', 'Unlimited', '₹999', '₹2997', '₹5994', '₹11988', '✔'],
                ['Prime HD6', '300 MBPS', 'Unlimited', '₹1399', '₹4197', '₹8394', '₹16788', '✔'],
                ['Prime HD7', '500 MBPS', 'Unlimited', '₹1624', '₹4872', '₹9744', '₹19488', '✔'],
                ['Prime HD8', '1 GBPS', 'Unlimited', '₹2000', '₹6000', '₹12000', '₹24000', '✔'],
              ].map((plan, index) => (
                <tr key={index}>
                  {plan.map((data, i) => (
                    <td key={i}>{data}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Blazing Fast Internet Speeds</li>
          <li>24/7 Dedicated Customer Support</li>
          <li>Affordable Plans Tailored to Your Needs</li>
        </ul>
      </section>
      


      <Footer />
    </>
  );
};

export default HomeBroadband;

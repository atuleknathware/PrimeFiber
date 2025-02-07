import React from "react";
import './Commercial.css'
import Footer from "./Footer";

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
     

      {/* Plans Section */}
      <section>
        <h2>Internet Plans</h2>

        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Plan Speed (MBPS)</th>
                <th>DATA</th>
                <th>3 Months</th>
                <th>6 Months</th>
                <th>12 Months</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Prime Stream 50 MBPS', '50 MBPS', 'Unlimited', '₹2247', '₹4399', '₹8499'],
                ['Prime Stream 100 MBPS', '100 MBPS', 'Unlimited', '₹2697', '₹5299', '₹10499'],
                ['Prime Stream 150 MBPS', '150 MBPS', 'Unlimited',  '₹3447', '₹6794', '₹13788'],
                ['Prime Stream 300 MBPS', '300 MBPS', 'Unlimited',  '₹4674', '₹9200', '₹18599'],
                ['Prime Stream 500 MBPS', '500 MBPS', 'Unlimited',  '₹6897', '₹13794', '₹27588'],
                ['Prime Stream 1 GBPS', '1 GBPS', 'Unlimited', '₹8997', '₹17994', '₹35988']
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
        <h3>Our Patners</h3>
        <section style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
          <img className="patners-logo1" src="src\logos\AsianHospital.jpg" alt="" />
          <img className="patners-logo" src="src\logos\DhootHospital.jpg" alt="" />
          <img className="patners-logo2" src="src\logos\ENCORE.jpg" alt="" />
          <img className="patners-logo" src="src\logos\Monginis.jpg" alt="" />
          <img className="patners-logo1" src="src\logos\MYFM.jpg" alt="" />
        </section>
      </section>
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Blazing Fast Internet Speeds</li>
          <li>24/7 Dedicated Customer Support</li>
          <li>Affordable Plans Tailored to Your Needs</li>
        </ul>
      </section>
      {/* Footer Section */}
      <Footer/>

    </div>
  );
};

export default Business;

import React from 'react'

const HomeBroadband = () => {
  return (
    <>

      <section className="plans-section">
        <h2 style={{textAlign:"center"}}>Our Plans For Home Broadband</h2>
        <div className="plan-cards">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <p>Speed: Up to 50 Mbps</p>
            <p>Price: ₹649/month</p>
            <button className="plan-button">Choose Plan</button>
          </div>
          <div className="plan-card">
            <h3>Pro Plan</h3>
            <p>Speed: Up to 150 Mbps</p>
            <p>Price: ₹999/month</p>
            <button className="plan-button">Choose Plan</button>
          </div>
          <div className="plan-card">
            <h3>Ultra Plan</h3>
            <p>Speed: Up to 500 Mbps</p>
            <p>Price: ₹1999/month</p>
            <button className="plan-button">Choose Plan</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default HomeBroadband
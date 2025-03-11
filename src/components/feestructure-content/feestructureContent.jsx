import React from 'react';
import './feestructureContent.css';

const feestructureContent = () => {
  return (
    <div className="outer-container">
      <div className="title-fee">
        <h1>Fee Structure</h1>
        <p>Our fee structure is designed to be flexible and affordable for all types of traders. Choose the plan that best suits your needs.</p>
      </div>
    <div className="pricing-container">
      <div className="pricing-card">
        <div className="plan">
          <h3>Beginner Technical Analysis Course</h3>
          <h2>₹ 20,000 + GST </h2>
          <p>✔️Course Learning Checks</p>
          <p>✔️Course Discussions</p>
          <p>✔️Exercise Files</p>
          <button className="btn free">Get started</button>
        </div>
        <div className="plan">
          <h3>Advanced Technical Analysis Course​</h3>
          <h2>₹ 25,000 + GST​</h2>
          <p>✔️Course Learning Checks</p>
          <p>✔️Course Discussions</p>
          <p>✔️Exercise Files</p>
          <button className="btn standard">Upgrade Now</button>
        </div>
        <div className="plan">
          <h3>Integrated Beginner and Technical Analysis Course​</h3>
          <h2>₹ 30,000 + GST​</h2>
          <p>✔️Course Learning Checks</p>
          <p>✔️Course Discussions</p>
          <p>✔️Exercise Files</p>
          <button className="btn premium">Try for free</button>
        </div>
      </div>
    </div>

    {/* ---------------------------------------------- */}
    <div className="pricing-container">
      <div className="pricing-card">
        <div className="plan">
          <h3>Intraday Strategy Course​          </h3>
          <h2>₹ 15,000 + GST</h2>
          <p>✔️Course Learning Checks</p>
          <p>✔️Course Discussions</p>
          <p>✔️Exercise Files</p>
          <button className="btn free">Get started</button>
        </div>
        <div className="plan">
          <h3>Elliott Wave Program​</h3>
          <h2>₹ 35,000 + GST         </h2>
          <p>✔️Course Learning Checks</p>
          <p>✔️Course Discussions</p>
          <p>✔️Exercise Files</p>
          <button className="btn standard">Upgrade Now</button>
        </div>
        <div className="plan">
          <h3>Chartered Market Technician(CMT)</h3>
          <h2>₹ 35,000 + GST​</h2>
          <p>✔️Course Learning Checks</p>
          <p>✔️Course Discussions</p>
          <p>✔️Exercise Files</p>
          <button className="btn premium">Try for free</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default feestructureContent;

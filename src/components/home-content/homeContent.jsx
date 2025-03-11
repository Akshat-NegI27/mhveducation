import React from 'react';
import './homeContent.css';



const HomeContent = () => {
  return (
    <div className="pg1section1">
      <div className="content">
        <span className="tag">📈 Master The Markets</span>
        <h1>
          Learn to <span className="highlight">invest</span> with confidence
        </h1>
        <p>
          Comprehensive, expert-led stock market courses designed to transform
          beginners into confident traders and help experienced investors refine
          their strategy.
        </p>
        <div className="buttons">
          <button className="primary-btn">Enroll Now →</button>
          <button className="secondary-btn">View All Courses</button>
        </div>
        <div className="students">👥 Join 12,000+ Students</div>
      </div>
      <div className="image-container">
        <div className="image-overlay">
          <span className="badge">📈 Stock Market Fundamentals</span>
          <p>Learn the essentials in our most popular course</p>
        </div>
      </div>
    </div>

  );
};

export default HomeContent;
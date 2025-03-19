import React from 'react';
import './coursesContent.css';
import vid from '../../img/vid1.mp4';
const CoursesContent = () => {
  return (
    <div className="courses-container">

      <div className="hero-section">
        <div className="bg">
        <video autoPlay loop muted playsInline>
          <source src={vid} type="video/mp4" />
        </video>

        <h1>Welcome to Our Courses</h1>
        <p>Explore a variety of courses to enhance your skills and knowledge.</p>
        <button className="explore-button">Explore Courses</button>
      </div>

      </div>  

      <div className="courses-grid">
      <div className="title-fee">
        <h1>Fee Structure</h1>
        <p>Our fee structure is designed to be flexible and affordable for all types of traders. Choose the plan that best suits your needs.</p>
      </div>
        <div className="cards">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-image-container">
              {course.popular && (<span className="course-popular-badge">POPULAR</span>)}
              <img src={course.image} alt={course.title} className="course-image" />
            </div>
            <div className="course-details">
              <div className="courselvl">
              <span className="course-level">{course.level}</span>
              <span className="course-rating">⭐ {course.rating}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span>{course.rate} + GST</span>
              </div>
              <div className="datax">
              <p>✔️ Course Learning Checks</p>
              <p>✔️ Course Discussions</p>
              <p>✔️ Exercise Files</p>
                </div>
                {/* <div className="course-author-rating">
                  <span className="course-author">BY {course.author.toUpperCase()}</span>
                </div> */}
              <button className="enroll-button">Enroll Now</button>
            </div>
          </div>
                  ))}
          </div>

      </div>
{/* courses */}
{/* <div className="outer-container">
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
    </div> */}

    {/* ---------------------------------------------- */}
    {/* <div className="pricing-container">
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
  </div> */}

{/* ---------------------------------------------- */}
      <div className="containerr">
      <h2 className="section-title">WHY CHOOSE MHV EDUCATION?</h2>
      <p className="section-subtitle">
        We provide a premium learning environment with features designed to help you succeed in the stock market.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default CoursesContent;

const courses = [
  {
    level: 'Beginner',
    title: 'Beginner Technical Analysis Course',
    description: 'Master the basics of stock market investing with our comprehensive beginner course.',
    rate: '₹ 20,000',
    students: '12,543',
    rating: 4.8,
    author: 'Sarah Johnson',
    // popular: true,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Intermediate',
    title: 'Advanced Technical Analysis Course',
    description: 'Learn how to read charts and identify trading patterns for better investment decisions.',
    rate: '₹ 20,000',
    students: '8,721',
    rating: 4.7,
    author: 'Michael Chang',
    popular: false,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Advanced',
    title: 'Integrated Beginner and Technical Analysis Course',
    description: 'Discover how to identify undervalued stocks using fundamental analysis techniques.',
    rate: '₹ 20,000',
    students: '7,432',
    rating: 4.9,
    author: 'Robert Greene',
    // popular: true,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Beginner',
    title: 'Intraday Strategy Course​',
    description: 'Master the basics of stock market investing with our comprehensive beginner course.',
    rate: '₹ 20,000',
    students: '12,543',
    rating: 4.8,
    author: 'Sarah Johnson',
    // popular: true,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Intermediate',
    title: 'Elliott Wave Program​',
    description: 'Learn how to read charts and identify trading patterns for better investment decisions.',
    rate: '₹ 20,000',
    students: '8,721',
    rating: 4.7,
    author: 'Michael Chang',
    popular: false,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Advanced',
    title: 'Chartered Market Technician(CMT)',
    description: 'Discover how to identify undervalued stocks using fundamental analysis techniques.',
    rate: '₹ 20,000',
    students: '7,432',
    rating: 4.9,
    author: 'Robert Greene',
    // popular: true,
    image: '/src/img/cources.jpg',
  },
];

const features = [
  {
    icon: '🎥',
    title: 'HD Video Lessons',
    description: 'High-quality, professionally produced video lessons for optimal learning.',
  },
  {
    icon: '⏰',
    title: 'Learn at Your Pace',
    description: 'Access courses 24/7 and learn whenever it fits your schedule.',
  },
  {
    icon: '📘',
    title: 'Comprehensive Resources',
    description: 'Downloadable materials, cheat sheets, and templates included.',
  },
  {
    icon: '🎯',
    title: 'Market Simulation',
    description: 'Practice with real-world market simulations without risking money.',
  },
  {
    icon: '🌐',
    title: 'Global Community',
    description: 'Connect with students and instructors worldwide for support.',
  },
  {
    icon: '🎓',
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with proven track records.',
  },
  {
    icon: '🎖️',
    title: 'Course Certificates',
    description: 'Earn certificates upon course completion to showcase your skills.',
  },
  {
    icon: '💳',
    title: 'Affordable Pricing',
    description: 'Quality education at competitive rates with payment plans available.',
  },
];
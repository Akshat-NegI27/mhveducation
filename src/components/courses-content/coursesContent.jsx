import React from 'react';
import './coursesContent.css';

const courses = [
  {
    level: 'Beginner',
    title: 'Stock Market Fundamentals',
    description: 'Master the basics of stock market investing with our comprehensive beginner course.',
    duration: '6 weeks',
    students: '12,543',
    rating: 4.8,
    author: 'Sarah Johnson',
    // popular: true,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Intermediate',
    title: 'Technical Analysis Masterclass',
    description: 'Learn how to read charts and identify trading patterns for better investment decisions.',
    duration: '8 weeks',
    students: '8,721',
    rating: 4.7,
    author: 'Michael Chang',
    popular: false,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Advanced',
    title: 'Value Investing Strategies',
    description: 'Discover how to identify undervalued stocks using fundamental analysis techniques.',
    duration: '10 weeks',
    students: '7,432',
    rating: 4.9,
    author: 'Robert Greene',
    // popular: true,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Beginner',
    title: 'Stock Market Fundamentals',
    description: 'Master the basics of stock market investing with our comprehensive beginner course.',
    duration: '6 weeks',
    students: '12,543',
    rating: 4.8,
    author: 'Sarah Johnson',
    // popular: true,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Intermediate',
    title: 'Technical Analysis Masterclass',
    description: 'Learn how to read charts and identify trading patterns for better investment decisions.',
    duration: '8 weeks',
    students: '8,721',
    rating: 4.7,
    author: 'Michael Chang',
    popular: false,
    image: '/src/img/cources.jpg',
  },
  {
    level: 'Advanced',
    title: 'Value Investing Strategies',
    description: 'Discover how to identify undervalued stocks using fundamental analysis techniques.',
    duration: '10 weeks',
    students: '7,432',
    rating: 4.9,
    author: 'Robert Greene',
    // popular: true,
    image: '/src/img/cources.jpg',
  },
];

const CoursesContent = () => {
  return (
    <div className="courses-container">
      <div className="hero-section">
        <h1>Welcome to Our Courses</h1>
        <p>Explore a variety of courses to enhance your skills and knowledge.</p>
        <button className="explore-button">Explore Courses</button>
      </div>

      <div className="courses-grid">
        <h1>OUR FEATURED COURSES</h1>
        <div className="cards">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-image-container">
              {course.popular && (
                <span className="course-popular-badge">POPULAR</span>
              )}
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
                <span>{course.duration}</span>
                <span>{course.students} students</span>
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
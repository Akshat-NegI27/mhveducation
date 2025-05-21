import React from "react";
import "./coursesContent.css";
import vid from "/assets/img/vid1.mp4";
import { Navigate } from "react-router-dom";
import SEO from "../../components/SEO";

const courseFiles = {
  "Beginner Technical Analysis Course":
    "/assets/courses/Technical_Analysis_Course_Syllabus.pdf",
  "Advanced Technical Analysis Course":
    "/assets/courses/Advanced_Technical_Analysis_Course_Syllabus.pdf",
  "Integrated Beginner and Technical Analysis Course":
    "/assets/courses/Integrated_Beginner_Technical_Analysis_Course_Syllabus.pdf",
  "Intraday Strategy Course​":
    "/assets/courses/Intraday_Strategies_Program_Course_Syllabus.pdf",
  "Elliott Wave Program​":
    "/assets/courses/Elliott_Wave_Theory_Course_Syllabus.pdf",
  "Chartered Market Technician(CMT)":
    "/assets/courses/Chartered_Market_Technician_CMT_Course_Syllabus.pdf",
};
const openCoursePlan = (courseTitle) => {
  if (!courseFiles[courseTitle]) {
    alert("Course plan file not available.");
    return;
  }

  const filePath = `${window.location.origin}${courseFiles[courseTitle]}`;
  console.log(`Opening File: ${filePath}`);

  const newTab = window.open(filePath, "_blank");

  if (!newTab) {
    alert("Popup blocked! Please allow pop-ups for this site.");
  }
};

const CoursesContent = () => {
  return (
    <div className="courses-container">
      <SEO
        title="Stock Market Courses in Dehradun | MHV Education"
        description="Explore MHV Education’s top-rated stock market courses including Beginner & Advanced Technical Analysis, Intraday Strategy, Elliott Wave, and CMT. Learn from expert mentors in Dehradun with affordable pricing and certification."
        keywords="stock market courses in Dehradun, beginner trading course, advanced technical analysis, intraday strategy course, Elliott Wave training, CMT program, share market classes Dehradun"
        canonical="https://mhveducation.com/courses"
      />
      <div className="hero-section">
        <div className="bg">
          <video autoPlay loop muted playsInline>
            <source src={vid} type="video/mp4" />
          </video>
          <h1>Welcome to Our Courses</h1>
          <p>
            Explore a variety of courses to enhance your skills and knowledge.
          </p>
          <button
            className="explore-button"
            onClick={() => {
              const section = document.getElementById("fee");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore Courses
          </button>
        </div>
      </div>

      <div className="courses-grid" id="fee">
        <div className="title-fee">
          <h1>Fee Structure</h1>
          <p>
            Our fee structure is designed to be flexible and affordable for all
            types of traders. Choose the plan that best suits your needs.
          </p>
        </div>
        <div className="cards">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image-container">
                {course.popular && (
                  <span className="course-popular-badge">POPULAR</span>
                )}
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
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
                <div className="course-actions">
                  <button
                    className="enroll-button"
                    onClick={() => Navigate("/Contact")}
                  >
                    Enroll Now
                  </button>
                  <button
                    className="down-button"
                    onClick={() => openCoursePlan(course.title)}
                  >
                    <i className="fa-solid fa-file"></i> View Course Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="containerr">
        <h2 className="section-title">WHY CHOOSE MHV EDUCATION?</h2>
        <p className="section-subtitle">
          We provide a premium learning environment with features designed to
          help you succeed in the stock market.
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
    level: "Beginner",
    title: "Beginner Technical Analysis Course",
    description:
      "Master the basics of stock market investing with our comprehensive beginner course.",
    rate: "₹ 20,000",
    students: "12,543",
    rating: 4.8,
    image:
      "https://raw.githubusercontent.com/Akshat-NegI27/mhveducation/refs/heads/main/public/assets/img/1.avif",
  },
  {
    level: "Intermediate",
    title: "Advanced Technical Analysis Course",
    description:
      "Learn how to read charts and identify trading patterns for better investment decisions.",
    rate: "₹ 25,000",
    students: "8,721",
    rating: 4.7,
    image:
      "https://raw.githubusercontent.com/Akshat-NegI27/mhveducation/refs/heads/main/public/assets/img/2.jpg",
  },
  {
    level: "Advanced",
    title: "Integrated Beginner and Technical Analysis Course",
    description:
      "Discover how to identify undervalued stocks using fundamental analysis techniques.",
    rate: "₹ 30,000",
    students: "7,432",
    rating: 4.9,
    image:
      "https://raw.githubusercontent.com/Akshat-NegI27/mhveducation/refs/heads/main/public/assets/img/6.webp",
  },
  {
    level: "Beginner",
    title: "Intraday Strategy Course​",
    description:
      "Master the basics of stock market investing with our comprehensive beginner course.",
    rate: "₹ 15,000",
    students: "12,543",
    rating: 4.8,
    image:
      "https://raw.githubusercontent.com/Akshat-NegI27/mhveducation/refs/heads/main/public/assets/img/5.jpg",
  },
  {
    level: "Intermediate",
    title: "Elliott Wave Program​",
    description:
      "Learn how to read charts and identify trading patterns for better investment decisions.",
    rate: "₹ 35,000",
    students: "8,721",
    rating: 4.7,
    image:
      "https://raw.githubusercontent.com/Akshat-NegI27/mhveducation/refs/heads/main/public/assets/img/4.webp",
  },
  {
    level: "Advanced",
    title: "Chartered Market Technician(CMT)",
    description:
      "Discover how to identify undervalued stocks using fundamental analysis techniques.",
    rate: "₹ 35,000",
    students: "7,432",
    rating: 4.9,
    image:
      "https://raw.githubusercontent.com/Akshat-NegI27/mhveducation/refs/heads/main/public/assets/img/3.jpg",
  },
];

const features = [
  {
    icon: "🎥",
    title: "HD Video Lessons",
    description:
      "High-quality, professionally produced video lessons for optimal learning.",
  },
  {
    icon: "⏰",
    title: "Learn at Your Pace",
    description:
      "Access courses 24/7 and learn whenever it fits your schedule.",
  },
  {
    icon: "📘",
    title: "Comprehensive Resources",
    description:
      "Downloadable materials, cheat sheets, and templates included.",
  },
  {
    icon: "🎯",
    title: "Market Simulation",
    description:
      "Practice with real-world market simulations without risking money.",
  },
  {
    icon: "🌐",
    title: "Global Community",
    description: "Connect with students and instructors worldwide for support.",
  },
  {
    icon: "🎓",
    title: "Expert Instructors",
    description: "Learn from industry professionals with proven track records.",
  },
  {
    icon: "🎖️",
    title: "Course Certificates",
    description:
      "Earn certificates upon course completion to showcase your skills.",
  },
  {
    icon: "💳",
    title: "Affordable Pricing",
    description:
      "Quality education at competitive rates with payment plans available.",
  },
];

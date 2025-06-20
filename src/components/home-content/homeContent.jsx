import { useEffect, useState } from "react";
import "./homeContent.css";
import "./homeContentmedia.css";
import SEO from "../../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import main from "/assets/img/Detail.mp4";
import img1 from "/assets/img/pic1.webp";
import img2 from "/assets/img/pic2.webp";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    id: 1,
    question: "What courses do you offer?",
    answer:
      "We offer beginner, intermediate and advance level courses for traders and investors, covering every aspect of stocks and index analysis through comprehensive technical analysis techniques.",
  },
  {
    id: 2,
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes, Our beginner friendly courses are specially designed for you to learn the fundamental concepts of stock market, with step by step guidance which makes learning share market trading effortless for newcomers.",
  },
  {
    id: 3,
    question: "What is the duration of each course ?",
    answer:
      "The course duration varies depending of the type and level of training opted for. Our courses range from 4 weeks for beginner modules to 12 weeks for advanced modules.",
  },
  {
    id: 4,
    question: "Do you offer live trading sessions as part of the training?",
    answer:
      "Yes, we provide live share market trading sessions where students can execute the strategies they have learned during the course.",
  },
  {
    id: 5,
    question: "Will I have access to instructors for guidance and questions?",
    answer:
      "Definitely. Our mentors are available to solve your queries through direct interactions even after the course tenure ends.",
  },
  {
    id: 6,
    question: "Is there a trial class or demo session available?",
    answer:
      "Yes, all the trading courses at MHV Education include a 1 hour-free demo session for students.",
  },
  {
    id: 7,
    question:
      "How is MHV Education Institute different from other stock market training institutes?",
    answer:
      "At MHV Education we offer personalized mentorship through both Offline and Online modes. The courses are designed to equip you for long-term success in both trading and investing in stock market.",
  },
];
const reviews = [
  {
    id: 1,
    name: "Raj",
    place: "Dehradun",
    feedback:
      "Excellent institute with knowledgeable instructors. They break down complex trading concepts into simple, easy to understand modules. A highly recommended Stock Market Institute, if you are looking for live share market trading executions.",
  },
  {
    id: 2,
    name: "Shakshi",
    place: "Dehradun",
    feedback:
      "I enrolled in the Integrated technical analysis course, I would say this is the best Stock Market Institute in Dehradun. With classes during the market hours I actually learned how to implement and execute the strategies.",
  },
  {
    id: 3,
    name: "Shivham",
    place: "Dehradun",
    feedback:
      "As a beginner, I was trading very aggressively in the options market but after joining the beginner technical analysis course I have gained control over my emotions and learned the discipline needed in trading the Stock Market. Thank you MHV Education and the team.",
  },
  {
    id: 4,
    name: "Pyush",
    place: "Roorkee",
    feedback:
      "MHV Education is the best Stock Market Institute in Dehradun. The special attention by the mentors have really helped me get control over my trading concepts. Highly recommended.",
  },
  {
    id: 5,
    name: "Vaishali Sharma",
    place: "Dehradun",
    feedback:
      "I have done my online Stock Market courses earlier from another institutes, I would say joining the online intraday strategy course with MHV Education was the best till now. Best mentors.",
  },
  {
    id: 6,
    name: "Mayank Patel",
    place: "Dehradun",
    feedback:
      "I had my online demo session with Mr. Prakhar, after that I knew exactly which share market course would be best suited for me. Let me tell you, this is the Best Stock market Institute in Dehradun, I am still learning and executing the strategies as guided. Thanks to MHV Education.",
  },
  {
    id: 7,
    name: "Kanupriya Kothari",
    place: "Dehradun",
    feedback:
      "Share market trading has been so much easier since I have joined this institute. Practical implementation of strategies is the best part of the course designed by this institute.",
  },
  {
    id: 8,
    name: "Garima Rawat",
    place: "Dehradun",
    feedback:
      "I joined the Elliott wave program, and it has provided me with one more trading and investment strategy in Share market. A must do course here.",
  },
];

const HomeContent = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsVisible(true), 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="homepg">
      <SEO
        title="MHV Education - Best Stock Market Courses in Dehradun"
        description="Join MHV Education – Dehradun's leading institute for stock market courses. Master trading, investing, and technical analysis with hands-on guidance from market experts."
        keywords="stock market course, Dehradun, MHV Education, trading institute"
        canonical="https://mhveducation.com/"
      />
      <div className="pg1section1">
        <div className="content">
          <span className="tag">📈 Master The Markets</span>
          <h1>
            Learn to <span className="highlight">invest</span> with confidence
          </h1>
          <p>
            Comprehensive, expert-led stock market courses designed to transform
            beginners into confident traders and help experienced investors
            refine their strategy.
          </p>
          <div className="buttons">
            <Link className="button-underline" to="/courses">
              View All Courses
            </Link>

            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="learn-more"
            >
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Enroll Now</span>
            </button>
          </div>
          <div className="students">👥 Join 12,000+ Students</div>
        </div>
        <div className="image-container">
          <div className="image-overlay">
            <span className="badge">📈 Stock Market Fundamentals</span>
            <p>Learn the essentials in our most popular course</p>
          </div>
          <img src={img1} alt="Stock Market" className="imgcon" />
        </div>
      </div>

      <div className="pg1section2">
        <div className="s2content">
          <h1>
            Unlock Financial Success with Expert-Led Stock Market Training
          </h1>
          <p>
            Are you looking for the best trading course in Dehradun to master
            stock market trading?
            <br /> At MHV Education, we provide certified stock market courses
            for beginners and experienced traders..
          </p>
          <div className="buttons">
            <Link className="button-underline" to="/courses">
              View All Courses
            </Link>
            <Link className="button-underline" to="/contact">
              Enroll Now →
            </Link>
          </div>
        </div>
        <div className="s2img">
          <div className="imgs">
            <video autoPlay loop muted src={main} type="video/mp4" />
          </div>
        </div>
        <div className="pg1section2text">
          <h1>Why Choose Our Stock Market Course in Dehradun?</h1>
          <p>
            Practical Learning: No boring theory—only real-market simulations
            and live trading sessions.
            <br />
            Expert Trainers: Learn from professionals with years of experience
            in intraday trading, swing trading, and long-term investing.
            <br />
            Flexible Batches: Choose between weekend classes for working
            professionals or online stock market courses with lifetime access.
            <br />
            Certification: Get a recognized stock market certification to boost
            your trading career. Don’t just trade—trade smart with the best
            stock market courses in Dehradun.
          </p>
        </div>

        <div className="pg1section3text">
          <h1>Courses We Provide</h1>
          <div className="alltxt">
            <div className="p1">
              <div className="course-item">
                Beginner Technical Analysis Course
              </div>
              <div className="course-item">
                Advanced Technical Analysis Course
              </div>
              <div className="course-item">
                Integrated Beginner & Technical Analysis
              </div>
            </div>
            <div className="p2">
              <div className="course-item">Intraday Strategy Course</div>
              <div className="course-item">Elliott Wave Program</div>
              <div className="course-item">
                Chartered Market Technician (CMT)
              </div>
            </div>
          </div>
        </div>

        <div className="pg1section4text">
          <h1>What You Will Learn</h1>
          <p>
            • Stock Market Basics – How markets work, types of orders, and key
            financial terms. <br />
            • Technical Analysis – Master candlestick patterns, chart trends,
            and indicators like RSI & MACD. <br />
            • Trading Strategies – Intraday, swing, and positional trading
            techniques. <br />• Risk Management – Protect your capital with
            smart stop-loss and portfolio diversification.
          </p>
        </div>
        <div className="pg1section5img">
          <div className="pg1section5image">
            <img src={img2} alt="Stock Market Course" />
          </div>
          <div className="pg1section5text">
            <div className="para1">
              <h1>Join Our Stock Market Course Today!</h1>
              <p>
                • Beginners – Start your journey in share market trading with a
                solid foundation. <br />
                • Working Professionals – Learn part-time trading strategies for
                passive income. <br /> • Investors – Enhance your skills in
                fundamental and technical analysis. <br /> • College Students –
                Build financial literacy early for long-term wealth creation.
              </p>
            </div>
            <div className="para2">
              <h1>Flexible Learning Options</h1>
              <p>
                • Classroom Training – Join our Dehradun-based institute with
                live trading labs. <br />
                • Online Stock Market Course – Learn at your own pace with
                recorded lectures & live mentorship. <br />• We provide share
                market courses online with certificates in Dehradun.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pg1section4">
        <section className="student-reviews-section">
          <div className="container">
            <h2 className="section-title">What Our Students Have to Say...</h2>
            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="review-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="review-rating">⭐️⭐️⭐️⭐️⭐️</div>
                  <div className="quotes-icon"></div>
                  <p className="review-feedback">"{review.feedback}"</p>
                  <h3 className="reviewer-name">{review.name}</h3>
                  <h3 className="reviewer-place">{review.place}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="pg1section3">
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <button
                    className={`faq-question ${
                      activeFaq === faq.id ? "active" : ""
                    }`}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    {faq.question}
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === faq.id && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: 500 }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.8, 0.25, 1],
                        }}
                        className="faq-answer"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className={`whatsapp-float ${!isVisible ? "hide" : ""}`}>
        <div className="whatsapp-menu desktop-only">
          <a
            href="https://wa.me/919634104622?text=Hi..."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            📚 Tell me more about your courses
          </a>
          <a
            href="https://wa.me/919634104622?text=Hey..."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💰 What are the course fees?
          </a>
          <a
            href="https://wa.me/919634104622?text=Hey..."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            🎓 Do you offer a trial/demo session?
          </a>
        </div>
        <a
          href="https://wa.me/919634104622?text=Hey..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Chat"
            className="whatsapp-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeContent;

import React from 'react';
import './homeContent.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


const faqs = [
  { id: 1, question: 'What courses do you offer?', answer: ' We offer beginner, intermediate and advance level courses for traders and investors, covering every aspect of stocks and index analysis through comprehensive technical analysis techniques.' },
  { id: 2, question: 'Are the courses suitable for beginners?', answer: 'Yes, Our beginner friendly courses are specially designed for you to learn the fundamental concepts of stock market, with step by step guidance which makes learning share market trading effortless for newcomers.' },
  { id: 3, question: 'What is the duration of each course ?', answer: 'The course duration varies depending of the type and level of training opted for. Our courses range from 4 weeks for beginner modules to 12 weeks for advanced modules.' },
  { id: 4, question: 'Do you offer live trading sessions as part of the training?', answer: ' Yes, we provide live share market trading sessions where students can execute the strategies they have learned during the course.' },
  { id: 5, question: 'Will I have access to instructors for guidance and questions?', answer: 'Definitely. Our mentors are available to solve your queries through direct interactions even after the course tenure ends.' },
  { id: 6, question: 'Is there a trial class or demo session available?', answer: 'Yes, all the trading courses at MHV Education include a 1 hour-free demo session for students.' },
  { id: 7, question: 'How is MHV Education Institute different from other stock market training institutes?', answer: 'At MHV Education we offer personalized mentorship through both Offline and Online modes. The courses are designed to equip you for long-term success in both trading and investing in stock market.' },

];



const HomeContent = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };
  return (
    <div className="homepg">
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
        <div className="students">👥 Join 12,000+ Students
        </div>
      </div>
      <div className="image-container">
        <div className="image-overlay">
          <span className="badge">📈 Stock Market Fundamentals</span>
          <p>Learn the essentials in our most popular course</p>
        </div>
      </div>
    </div>
    <div className="pg1section2">
        <div className="s2content">
        <h1>CHOOSE BEST STOCK MARKET INSTITUTE</h1>
        <p>MHV Education is more than a Stock Market Institution. We offer extensive courses to learn about share market trading, including the live execution of the strategies learned throughout the program. Whether you are a beginner or an advanced level trader, we help you build live trading confidence, retailer psychology, cultivate the discipline needed to take control of your trading and investment future.</p>
        <div className="buttons">
          <button className="primary-btn">Enroll Now →</button>
          <button className="secondary-btn">View All Courses</button>
        </div>
        </div>
        <div className="s2img">
          <img src="https://hipfonts.com/wp-content/uploads/2023/01/milad-fakurian-E8Ufcyxz514-unsplash.jpg" alt=""/>
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
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >

              <div className="review-rating">⭐️⭐️⭐️⭐️⭐️</div>
            <div className="quotes-icon"> </div>
              <p className="review-feedback">"{review.feedback}"</p>
              <h3 className="reviewer-name">{review.name}</h3>
              <h3 className="reviewer-place">{review.place} </h3>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>

</div>
{/* <div className="pg1section3">
  <section className="faq-container">
    <h2 className="faq-title">Frequently Asked Questions</h2>
    <div className="faq-grid">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          className="faq-card"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
        >
          <h3 className="faq-question">{faq.question}</h3>
          <p className="faq-answer">{faq.answer}</p>
        </motion.div>
      ))}
    </div>
  </section>
</div> */}

<div className="pg1section3">
<section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${activeFaq === faq.id ? 'active' : ''}`}
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
      transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
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


    </div>

  );
};

export default HomeContent;


const reviews = [
  {
    id: 1,
    name: 'Raj',
    place: 'Dehradun',
    feedback: 'Excellent institute with knowledgeable instructors. They break down complex trading concepts into simple, easy to understand modules. A highly recommended Stock Market Institute, if you are looking for live share market trading executions.',
  },
  {
    id: 2,
    name: 'Shakshi',
    place: 'Dehradun',
    feedback: 'I enrolled in the Integrated technical analysis course, I would say this is the best Stock Market Institute in Dehradun. With classes during the market hours I actually learned how to implement and execute the strategies.',
  },
  {
    id: 3,
    name: 'Shivham',
    place: 'Dehradun',
    feedback: 'As a beginner, I was trading very aggressively in the options market but after joining the beginner technical analysis course I have gained control over my emotions and learned the discipline needed in trading the Stock Market. Thank you MHV Education and the team.',
  },
  {
    id: 4,
    name: 'Pyush',
    place: 'Roorkee',
    feedback: 'MHV Education is the best Stock Market Institute in Dehradun. The special attention by the mentors have really helped me get control over my trading concepts. Highly recommended.',
  },
  {
    id: 5,
    name: 'Vaishali Sharma',
    place: 'Dehradun',
    feedback: 'I have done my online Stock Market courses earlier from another institutes, I would say joining the online intraday strategy course with MHV Education was the best till now. Best mentors.',
  },
  {
    id: 6,
    name: 'Mayank Patel',
    place: 'Dehradun',
    feedback: 'I had my online demo session with Mr. Prakhar, after that I knew exactly which share market course would be best suited for me. Let me tell you, this is the Best Stock market Institute in Dehradun, I am still learning and executing the strategies as guided. Thanks to MHV Education.',
  },
  {
    id: 7,
    name: 'Kanupriya Kothari',
    place: 'Dehradun',
    feedback: 'Share market trading has been so much easier since I have joined this institute. Practical implementation of strategies is the best part of the course designed by this institute.',
  },
  {
    id: 8,
    name: 'Garima Rawat',
    place: 'Dehradun',
    feedback: 'I joined the Elliott wave program, and it has provided me with one more trading and investment strategy in Share market. A must do course here.',
  },
];

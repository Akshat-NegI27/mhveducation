import React from 'react';
import './homeContent.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


const faqs = [
  { id: 1, question: 'What courses do you offer?', answer: ' We offer beginner, intermediate and advance level courses for traders and investors, covering every aspect of stocks and index analysis through comprehensive technical analysis techniques.' },
  { id: 2, question: 'Are the courses suitable for beginners?', answer: 'Yes, Our beginner friendly courses are specially designed for you to learn the fundamental concepts of stock market, with step by step guidance which makes learning share market trading effortless for newcomers.' },
  { id: 3, question: 'Are the courses beginner-friendly?', answer: 'Yes, we offer beginner-friendly courses along with advanced topics.' },
  { id: 4, question: 'Do you offer certification?', answer: 'Yes, we offer certifications such as the Chartered Market Technician (CMT).' },
  { id: 5, question: 'What payment methods are accepted?', answer: 'We accept all major credit/debit cards and digital payment methods.' },
  { id: 6, question: 'Can I access courses on mobile?', answer: 'Yes, our courses are mobile-friendly and can be accessed on any device.' },
  { id: 7, question: 'Can I access courses on mobile?', answer: 'Yes, our courses are mobile-friendly and can be accessed on any device.' },
  { id: 8, question: 'Can I access courses on mobile?', answer: 'Yes, our courses are mobile-friendly and can be accessed on any device.' },
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
        <h1>Lorem ipsum dolor sit</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, obcaecati! Minima animi, aliquid perferendis voluptatum, molestiae harum earum quibusdam ea temporibus odit delectus, velit voluptate? Nostrum numquam consequuntur odit saepe?</p>
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
    name: 'Shivam',
    place: 'Dehradun',
    feedback: 'As a beginner, I was trading very aggressively in the options market but after joining the beginner technical analysis course I have gained control over my emotions and learned the discipline needed in trading the Stock Market. Thank you MHV Education and the team.',
  },
  {
  id: 4,
  name: 'Raj',
  place: 'Dehradun',
  feedback: 'Excellent institute with knowledgeable instructors. They break down complex trading concepts into simple, easy to understand modules. A highly recommended Stock Market Institute, if you are looking for live share market trading executions.',
},
{
  id: 5,
  name: 'Shakshi',
  place: 'Dehradun',
  feedback: 'I enrolled in the Integrated technical analysis course, I would say this is the best Stock Market Institute in Dehradun. With classes during the market hours I actually learned how to implement and execute the strategies.',
},
{
  id: 6,
  name: 'Shivam',
  place: 'Dehradun',
  feedback: 'As a beginner, I was trading very aggressively in the options market but after joining the beginner technical analysis course I have gained control over my emotions and learned the discipline needed in trading the Stock Market. Thank you MHV Education and the team.',
},
];



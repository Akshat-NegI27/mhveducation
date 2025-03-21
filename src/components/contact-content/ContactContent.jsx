import React, { useState, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { scroller } from 'react-scroll';
import './ContactContent.css';
import vido from '../../img/vid1.mp4';
import { motion } from 'framer-motion';

// Styled components
const Wrapper = styled.section`
  padding: 120px 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 80vh;
`;

const Heading = styled.h2`
  color: black;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

const GridContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 50px;
  justify-content: space-between;
`;

const MapContainer = styled.div`
  border-radius: 0px;
  height: 100%;
  font-family: 'Poppins';
  width: 100%;
  overflow: hidden;
`;

const ContactContent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: ''
  });
  const [feedback, setFeedback] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_d7t8lio',
      'template_ywgdkou',
      formRef.current,
      'P5br5HxzGm9mQPi8t'
    )
    .then(() => {
      setFeedback('✅ Form successfully submitted. We will contact you shortly!');
      setFormData({ firstName: '', lastName: '', email: '', topic: '', message: '' });

      scroller.scrollTo('form-top', { duration: 500, smooth: true });

      setTimeout(() => {
        window.location.reload();
      }, 2500);
    })
    .catch((error) => {
      setFeedback(`❌ Submission failed: ${error.text}`);
    });
  }, []);

  return (
    <div className="hi-ccontainer" id="scroll-container">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Fill out the form below to get in touch!</p>
        </div>
        <div className="bgvid">
          <video autoPlay loop muted className="video">
            <source src={vido} type="video/mp4" />
          </video>
        </div>
      </div>

      <Wrapper>
        <GridContainer>
          <MapContainer>
            <Heading>Our Location</Heading>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.003708333702!2d78.08289358189612!3d30.36378440969597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7c27be48317%3A0xe9533331fe68926e!2sIKSANA%20Workspaces!5e1!3m2!1sen!2sus!4v1742021409298!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>

          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Topic"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>

            {/* Feedback popup */}
            {feedback && (
              <motion.div
                style={{
                  marginTop: "20px",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  padding: "12px 20px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "500",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {feedback}
              </motion.div>
            )}
          </motion.form>
        </GridContainer>
      </Wrapper>

      {/* SOCIAL MEDIA */}
      <div className="social-media-container">
        <p className="title">Follow Us</p>
        <ul className="social-media-list">
          <li><a href="#"><i className="fa-brands fa-instagram"></i><span>Instagram</span></a></li>
          <li><a href="#"><i className="fa-brands fa-youtube"></i><span>YouTube</span></a></li>
          <li><a href="#"><i className="fa-brands fa-spotify"></i><span>Spotify</span></a></li>
          <li><a href="#"><i className="fa-brands fa-facebook"></i><span>Facebook</span></a></li>
          <li><a href="#"><i className="fa-brands fa-tiktok"></i><span>TikTok</span></a></li>
          <li><a href="#"><i className="fa-brands fa-twitter"></i><span>Twitter</span></a></li>
          <li><a href="#"><i className="fa-brands fa-snapchat"></i><span>Snapchat</span></a></li>
          <li><a href="#"><i className="fa-brands fa-apple"></i><span>Apple</span></a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactContent;

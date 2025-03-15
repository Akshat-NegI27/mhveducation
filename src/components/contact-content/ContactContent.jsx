import React, { useState, useRef, useCallback, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { scroller } from 'react-scroll';
import LocomotiveScroll from 'locomotive-scroll';
import './ContactContent.css';

const Wrapper = styled.section`
  background-color: transparent;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 70vh;
`;

const Heading = styled.h2`
  color: #000;
  background-color: #fff;
  padding: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const FormContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
`;

const MapContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  color: #000;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  height:200px;
  margin-bottom: 10px;
  border-radius: 0px;
  color: #000;
`;

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
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
    emailjs.sendForm('service_7c9qd09', 'template_h6gq1m2', formRef.current, 'HnM8VT7Sq8Mc3wvpd')
      .then(
        () => {
          setFeedback('Message sent successfully!');
          setFormData({ firstName: '', lastName: '', email: '', topic: '', message: '' });
        },
        (error) => {
          setFeedback(`Failed: ${error.text}`);
        },
      );
    scroller.scrollTo('form-top', { duration: 500, smooth: true });
  }, []);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('#scroll-container'),
      smooth: true,
    });
    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <div className="hi-ccontainer" id="scroll-container">
    <h1 style={{ color: "black" }}>Contact Us</h1>

      <Wrapper>
        <GridContainer>
        <MapContainer>
            <Heading>Our Location</Heading>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.003708333702!2d78.08289358189612!3d30.36378440969597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7c27be48317%3A0xe9533331fe68926e!2sIKSANA%20Workspaces%20%7C%20Best%20Co-working%20%26%20Office%20Space%20in%20Dehradun%20%7C%20Private%20Offices%20at%20IT%20Park%2C%20Dehradun!5e1!3m2!1sen!2sus!4v1742021409298!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
          <FormContainer>
            <h2>Got questions? We’re here to help! </h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <StyledInput type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
              <StyledInput type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
              <StyledInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
              <StyledInput type="text" name="topic" value={formData.topic} onChange={handleChange} placeholder="Topic" />
              <StyledTextarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" />
              <StyledButton type="submit">Submit</StyledButton>
            </form>
            {feedback && <p>{feedback}</p>}
          </FormContainer>
        </GridContainer>
      </Wrapper>
    </div>
  );
};

export default ContactContent;

import { useState, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { scroller } from "react-scroll";
import "./ContactContent.css";
import vido from "/assets/img/vid1.mp4";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

const Wrapper = styled.section`
  padding: 20px 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: fit-content;

  @media (max-width: 1024px) {
    padding: 80px 60px;
  }

  @media (max-width: 768px) {
    padding: 60px 30px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 480px) {
    padding: 0px;
  }
`;

const Heading = styled.h2`
  color: black;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const GridContainer = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  gap: 40px;

  justify-content: space-evenly;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  @media (max-width: 480px) {
    gap: 120px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    padding: 0;
  }
`;

const MapContainer = styled.div`
  border-radius: 0px;
  height: fit-content;
  font-family: "Poppins";
  width: 50%;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 300px;
    width: 100%;
  }
`;

const ContactContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });
  const [feedback, setFeedback] = useState("");
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

    emailjs
      .sendForm(
        "service_4e0t51b",
        "template_sw7ekp1",
        formRef.current,
        "3_E0aNQ_UWSq5Eip_"
      )
      .then(() => {
        setFeedback(
          "✅ Form successfully submitted. We will contact you shortly!"
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          topic: "",
          message: "",
        });

        scroller.scrollTo("form-top", { duration: 500, smooth: true });

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
      <SEO
        title="Contact Us MHV Education | Best Stock Market Institute in Dehradun"
        description="Get in touch with MHV Education, the leading stock market training institute in Dehradun. Visit our office, fill out the contact form, or connect with us on social media platforms including Instagram, LinkedIn, and YouTube."
        keywords="contact MHV Education, stock market training Dehradun, share market classes, trading institute Dehradun, get in touch MHV Education"
        canonical="https://mhveducation.com/Contact"
      />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you. Fill out the form below to get in touch!
          </p>
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
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.6969682114545!2d78.08188347542638!3d30.372802774759943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7a1eb15df5b%3A0xec320e209ab53869!2sIKSANA%20Workspaces-%20Best%20Co-working%20and%20fully%20furnished%20office%20spaces%20in%20Dehradun!5e1!3m2!1sen!2sin!4v1742650823392!5m2!1sen!2sin"
              width="100%"
              height="500"
              title="Location of MHV Education on Google Maps"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>

          {}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            autoComplete="on"
          >
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              autoComplete="given-name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              autoComplete="family-name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              autoComplete="email"
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
              autoComplete="off"
            ></textarea>
            <button type="submit">Send Message</button>

            {}
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
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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

      {}
      <div className="social-media-container">
        <p className="title">Follow Us</p>
        <ul className="social-media-list">
          <li>
            <a
              href="https://www.facebook.com/mhveducation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MHV Education on Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
              <span>Facebook</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/mhveducation/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MHV Education on Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/company/mhv-education/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MHV Education on LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.youtube.com/@MHVeducation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MHV Education on YouTube"
            >
              <i className="fa-brands fa-youtube"></i>
              <span>YouTube</span>
            </a>
          </li>

          <li>
            <a
              href="https://medium.com/@mhveducation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MHV Education on Medium"
            >
              <i className="fa-brands fa-medium"></i>
              <span>Medium</span>
            </a>
          </li>

          <li>
            <a
              href="mailto:mhveducation@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email MHV Education"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>Mail</span>
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/+919634104622"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with MHV Education on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactContent;

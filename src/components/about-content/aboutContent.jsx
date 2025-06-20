import { useRef } from "react";
import "./aboutContent.css";
import vid2 from "/assets/img/about.mp4";
import mainhead from "/assets/img/aboutvid.mp4";
import SEO from "../../components/SEO";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import front from "/assets/img/front.png";
import front2 from "/assets/img/front2.png";
import front3 from "/assets/img/front3.png";
import { Helmet } from "react-helmet-async";
import "./aboutContentmedia.css";

<Helmet>
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "MHV Education",
      "url": "https://mhveducation.com/about",
      "logo": "https://mhveducation.com/logo.png",
      "founder": {
        "@type": "Person",
        "name": "Prakhar Rawat"
      },
      "description": "MHV Education is the leading stock market training institute in Dehradun, specializing in stock trading, investment strategies, and financial education.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dehradun",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/mhveducation",
        "https://www.instagram.com/mhveducation",
        "https://www.linkedin.com/company/mhveducation"
      ]
    }
    `}
  </script>
</Helmet>;

const AboutContent = () => {
  const exe1Ref = useRef(null);
  const exe2Ref = useRef(null);
  const exe3Ref = useRef(null);

  const scrollToProfile = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="about-container">
      <SEO
        title="About MHV Education | Best Stock Market Institute in Dehradun"
        description="Learn about MHV Education – Dehradun’s stock market institute founded by Prakhar Rawat. We offer technical analysis and strategies led by expert mentors."
        keywords="MHV Education, stock market institute Dehradun, Prakhar Rawat, technical analysis course, intraday trading course, CMT, Elliott wave training, share market mentor Dehradun"
        canonical="https://mhveducation.com/about"
      />
      <div className="heading-content">
        <div className="title-box">
          <h1>About Us</h1>
          <p>
            MHV Educations, a leading institute dedicated to providing
            high-quality stock market education and professional trading
            mentorship. Founded by Prakhar Rawat, a stock market trader with 12+
            years experience, our mission is to train the individuals with the
            knowledge and skills needed to trade and invest in the financial
            markets with confidence.
          </p>
        </div>
        <div className="vid-box">
          <video autoPlay loop muted src={mainhead} type="video/mp4" />
        </div>
      </div>

      {}
      <section className="mission-section">
        <div className="image-content">
          <img src="https://entail-assets.com/beprofit/Calculating%20profit%20margins-1633788391383.jpg" />
        </div>
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            MHV Education is a Stock Market Education Institution offering a
            wide-range of trading courses, designed for students aspiring to
            make a full-time career in Share Market Trading and Investing.
            Whether you are beginner who wants to start there trading journey or
            an experienced trader looking to refine your strategies our Wide
            range of courses provide you with the knowledge, skills and
            confidence you need to excel in the financial markets. Based in
            Dehradun, our expert-led Programs like Beginner and advance level
            technical analysis, Elliott wave program, Intraday strategies
            program specially designed for intraday traders, provide a practical
            approach in stock market trading. These Courses help you explore
            Retail Trader psychology through in-depth chart reading.
            <br />
            <br />
            Start your trading journey with our team and take the first-step
            towards financial mastery.
          </p>
        </div>
      </section>

      {}
      <section className="vision-section">
        <div className="vidmega">
          <video autoPlay loop muted src={vid2} type="video/mp4" />
        </div>
      </section>

      {}
      <section className="values-section">
        <div className="program-content">
          <h1>Programs & Courses</h1>
          <p>
            We offer beginner and advanced technical analysis programs and also
            CMT level training. This description emphasizes your focus on
            education, practical learning, and expert guidance, making it
            appealing to prospective students looking for quality stock market
            training.
          </p>
        </div>
        <div className="values-content">
          <h2>Our Core Values</h2>
          <ul className="values-list">
            <li className="value-item">Integrity and Transparency</li>
            <li className="value-item">Excellence in Education</li>
            <li className="value-item">Student Success</li>
            <li className="value-item">Excellence in Market</li>
          </ul>
        </div>
      </section>

      {}

      <div className="about-team">
        <div className="team-content">
          <h2>Our Team</h2>
        </div>
        <div className="team-cards">
          <div className="team-member" onClick={() => scrollToProfile(exe1Ref)}>
            <img src={front} alt="Team Member 1" className="team-photo" />
            <h3>Prakhar Rawat</h3>
            <p>Founder</p>
          </div>
          <div className="team-member" onClick={() => scrollToProfile(exe2Ref)}>
            <img src={front2} alt="Team Member 2" className="team-photo" />
            <h3>Sagar Juneja</h3>
            <p>Manager</p>
          </div>
          <div className="team-member" onClick={() => scrollToProfile(exe3Ref)}>
            <img src={front3} alt="Team Member 2" className="team-photo" />
            <h3>Vidhita Panwar</h3>
            <p>Business Manager</p>
          </div>
        </div>
      </div>
      {}
      <div className="section-3">
        {}

        <div className="title-3">
          <h1>Meet Our Executives</h1>
          <p>
            At MHV Education, our leadership is rooted in experience, passion,
            and a deep commitment to empowering individuals through stock market
            education. <br /> Get to know the minds driving our mission forward.
          </p>
        </div>
        <div className="profile1" ref={exe1Ref}>
          <div className="exe1">
            <div className="content">
              <h2>Prakhar Rawat</h2>
              <h3>Founder</h3>
              <p>
                Prakhar Rawat is a seasoned trader with expertise in technical
                analysis, discretionary trading, and algorithmic strategies.
                Since entering the stock market in 2013, he has developed a deep
                understanding of institutional trading and risk management.
                <br />
                After clearing CMT Level 1 in 2017, he traded U.S. markets at a
                hedge fund before shifting to discretionary and algorithmic
                trading in 2019. With a PGDM in Finance (2021-2023), he began
                mentoring traders in Chandigarh, helping them develop structured
                market strategies.
                <br />
                In 2024, Prakhar expanded internationally, training traders in
                Dubai, furthering his mission to educate and empower investors
                globally.
              </p>
              <div className="social">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <div className="photo">
              <img src={front} />
            </div>
          </div>
        </div>

        <div className="profile2" ref={exe2Ref}>
          <div className="exe2">
            <div className="content">
              <h2>Sagar Juneja</h2>
              <h3>Manager</h3>
              <p>
                Sagar Juneja is a finance professional specializing in
                investment analysis, business evaluation, and financial
                strategy. He holds an MBA from Great Lakes Institute of
                Management, majoring in Finance and Data Analytics.
                <br />
                Currently at State Street, Sagar identifies investment
                opportunities in the stock market using his expertise in
                investment banking. As a mentor at MHV Educations, he guides
                aspiring traders in financial modeling, macroeconomics, and
                commodity markets, making investing a practical learning
                experience.
                <br />
                With deep market knowledge, he helps students understand sector
                fundamentals and apply strategies in live market conditions.
              </p>
              <div className="social">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <div className="photo">
              <img src={front2} />
            </div>
          </div>
        </div>

        <div className="profile3" ref={exe3Ref}>
          <div className="exe3">
            <div className="content">
              <h2>Vidhita Panwar</h2>
              <h3>
                Business<span></span>Manager
              </h3>
              <p>
                Vidhita Panwar plays an important role at MHV Education as our
                Business Manager, supervising business operations, Business
                analyst, and arranging student interaction sessions. With a
                sharp eye for growth and a passion for delivering value, she
                ensures smooth coordination across departments and helps drive
                the institute’s vision forward.
              </p>
              <div className="social">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <div className="photo">
              <img src={front3} alt="Team Member 2" className="team-photo" />
            </div>
          </div>
        </div>
        <div className="section-contact">
          <h1>
            Contact MHV Education - The Best Stock Market Institute in Dehradun
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

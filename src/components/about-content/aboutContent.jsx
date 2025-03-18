import React from 'react';
import './aboutContent.css';
import video from '../../img/vid1.mp4';

const AboutContent = () => {
  return (
    <div className="about-container">
      <div className="heading-content">
      <div className="title-box">
      <h1>About Us</h1>
      <p>We are a team of passionate developers committed to creating amazing web experiences.
      </p>
      </div>
      <div className="vid-box">
      <video autoPlay loop muted src={video} type="video/mp4"/>
      </div>
      </div>
      
      
      {/* ---------------------------------------------- */}
      <section className="mission-section">
      <div className="image-content">
          <img src="https://entail-assets.com/beprofit/Calculating%20profit%20margins-1633788391383.jpg"/>
        </div>
        <div className="mission-content">
        <h2>Our Mission</h2>
        <p>
        MHV Education is a Stock Market Education Institution offering a wide-range of trading courses, designed for students aspiring to make a full-time career in Share Market Trading and Investing. Whether you are beginner who wants to start there trading journey or an experienced trader looking to refine your strategies our Wide range of courses provide you with the knowledge, skills and confidence you need to excel in the financial markets. Based in Dehradun, our expert-led Programs like Beginner and advance level technical analysis, Elliott wave program, Intraday strategies program specially designed for intraday traders, provide a practical approach in stock market trading. These Courses help you explore Retail Trader psychology through in-depth chart reading.
        <br />
        <br />
        Start your trading journey with our team and take the first-step towards financial mastery.
        </p>
        </div>
      </section>
      

      {/* ---------------------------------------------- */}
      <section className="values-section">
      <div className="program-content">
      <h1>Programs & Courses</h1>
      <p>
      We offer beginner and advanced technical analysis programs and also CMT level training. This description emphasizes your focus on education, practical learning, and expert guidance, making it appealing to prospective students looking for quality stock market training.
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

      {/* ---------------------------------------------- */}

      <div className="about-team">
        <div className="team-content">
          <h2>Meet the Team</h2>
        </div>
        <div className="team-cards">
        <div className="team-member">
          <img src="https://media.istockphoto.com/id/1185414460/photo/young-woman.jpg?s=612x612&w=0&k=20&c=KukKq-I_BJU0I1W4itV-IBuUZk3NubmGP2cgFEuaF0o=" alt="Team Member 1" className="team-photo" />
          <h3>John Doe</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <img src="https://media.istockphoto.com/id/1185414460/photo/young-woman.jpg?s=612x612&w=0&k=20&c=KukKq-I_BJU0I1W4itV-IBuUZk3NubmGP2cgFEuaF0o=" alt="Team Member 2" className="team-photo" />
          <h3>Jane Smith</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="team-member">
          <img src="https://media.istockphoto.com/id/1185414460/photo/young-woman.jpg?s=612x612&w=0&k=20&c=KukKq-I_BJU0I1W4itV-IBuUZk3NubmGP2cgFEuaF0o=" alt="Team Member 2" className="team-photo" />
          <h3>Jane Smith</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="team-member">
          <img src="https://media.istockphoto.com/id/1185414460/photo/young-woman.jpg?s=612x612&w=0&k=20&c=KukKq-I_BJU0I1W4itV-IBuUZk3NubmGP2cgFEuaF0o=" alt="Team Member 2" className="team-photo" />
          <h3>Jane Smith</h3>
          <p>UI/UX Designer</p>
        </div>
        </div>

      </div>
    </div>
  );
};

export default AboutContent;
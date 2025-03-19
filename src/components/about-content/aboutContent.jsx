import React, { useRef } from 'react';
import './aboutContent.css';
import video from '../../img/vid1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons';
import front from '../../img/front.png';

const AboutContent = () => {
  const exe1Ref = useRef(null);
  const exe2Ref = useRef(null);
  const exe3Ref = useRef(null);

  const scrollToProfile = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
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
        <section className="vision-section">
        <div className="vidmega">
      <video autoPlay loop muted src={video} type="video/mp4"/>
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
          <h2>Our Team</h2>
        </div>
        <div className="team-cards">
        <div className="team-member" onClick={() => scrollToProfile(exe1Ref)}>
        <img src={front} alt="Team Member 1" className="team-photo" />
          <h3>John Doe</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member" onClick={() => scrollToProfile(exe2Ref)}>
        <img src={front} alt="Team Member 2" className="team-photo" />
          <h3>Jane Smith</h3>
          <p>UI/UX Designer</p>
        </div>
        <div className="team-member" onClick={() => scrollToProfile(exe3Ref)}>
        <img src="https://media.istockphoto.com/id/1185414460/photo/young-woman.jpg?s=612x612&w=0&k=20&c=KukKq-I_BJU0I1W4itV-IBuUZk3NubmGP2cgFEuaF0o=" alt="Team Member 2" className="team-photo" />
          <h3>Jane Smith</h3>
          <p>UI/UX Designer</p>
        </div>

        </div>

      </div>
      {/* ---------------------------------------------- */}
      <div className="section-3">
        {/* <div className="team-overlay">
        <h1>TEAM Members</h1>
        </div> */}
            
        <div className="title-3">
           <h1>Meet Our Executives</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui recusandae voluptates aliquam libero suscipit autem maiores totam itaque modi, praesentium quam corporis, architecto, reiciendis ab id deserunt soluta nesciunt dolor.</p>
        </div>
<div className="profile1" ref={exe1Ref}>
        <div className="exe1" >
          <div className="content">
            <h2>Prakhar Rawat</h2>
            <h3>CEO</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla itaque voluptas unde cupiditate laboriosam illo natus excepturi veniam dolorum, omnis ullam doloribus vero quis esse aspernatur porro, aliquam consequatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla itaque voluptas unde cupiditate laboriosam illo natus excepturi veniam dolorum, omnis ullam doloribus vero quis esse aspernatur porro, aliquam consequatur</p>
            <div className="social">  
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faFacebook} />
             </a>
           
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faInstagram} />
             </a>
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon  icon={faXTwitter} />
             </a>

             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faLinkedin} />
                    </a>
             </div>

          </div>
          <div className="photo">
            <img src={front}/>
          </div>
          
        </div>
        </div>

        <div className="profile2" ref={exe2Ref}>
        <div className="exe2" >
          <div className="content">
            <h2>John Doe</h2>
            <h3>Manager</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla itaque voluptas unde cupiditate laboriosam illo natus excepturi veniam dolorum, omnis ullam doloribus vero quis esse aspernatur porro, aliquam consequatur? <br /> <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla itaque voluptas unde cupiditate laboriosam illo natus excepturi veniam dolorum, omnis ullam doloribus vero quis esse aspernatur porro, aliquam consequatur</p>
            <div className="social">  
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faFacebook} />
             </a>
           
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faInstagram} />
             </a>
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon  icon={faXTwitter} />
             </a>

             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faLinkedin} />
             </a>
             </div>

          </div>
          <div className="photo">
            <img src="https://media.istockphoto.com/id/1185414460/photo/young-woman.jpg?s=612x612&w=0&k=20&c=KukKq-I_BJU0I1W4itV-IBuUZk3NubmGP2cgFEuaF0o="/>
          </div>
          
        </div>
</div>

        <div className="profile3" ref={exe3Ref}>
        <div className="exe3">
          <div className="content">
            <h2>John Doe</h2>
            <h3>CEO</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla itaque voluptas unde cupiditate laboriosam illo natus excepturi veniam dolorum, omnis ullam doloribus vero quis esse aspernatur porro, aliquam consequatur? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla itaque voluptas unde cupiditate laboriosam illo natus excepturi veniam dolorum, omnis ullam doloribus vero quis esse aspernatur porro, aliquam consequatur</p>
            <div className="social">  
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faFacebook} />
             </a>
           
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faInstagram} />
             </a>
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon  icon={faXTwitter} />
             </a>

             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <FontAwesomeIcon icon={faLinkedin} />
             </a>
             </div>

          </div>
          <div className="photo">
            <img src="https://media.istockphoto.com/id/1185414460/photo/young-woman.jpg?s=612x612&w=0&k=20&c=KukKq-I_BJU0I1W4itV-IBuUZk3NubmGP2cgFEuaF0o="/>
          </div>
          
        </div>
      </div>
      <div className="section-contact">
          <h1>Get in Touch with Us</h1>
          </div>
      </div>



    </div>
  );
};

export default AboutContent;
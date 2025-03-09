import React from 'react';
import "./footer.css";
import 'boxicons';
import logo from './logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="containerx">
        <div className="content_footer">
          <div className="profil">
            <div className="logo_area">
              <img src={logo} alt="MVM EDUCATION Logo" />
              {/* <span className="logo_name">MVM EDUCATION</span> */}
            </div>
            <div className="desc_area">
              <p>MVM EDUCATION is your trusted source for comprehensive stock market training. Learn the ins and outs of stock trading, investment strategies, and market analysis from industry experts. Empower yourself with the knowledge to succeed in the stock market.</p>
            </div>
            <div className="social_media">
              <a href='https://steamcommunity.com/id/akyboy27/'><box-icon type='logo' name='steam' size='md' ></box-icon></a>
              <a href='https://open.spotify.com/user/5fwdg0bu7pj929ortdsmo0qea'><box-icon type='logo' name='spotify' size='md'></box-icon></a>
              <a href='https://discord.com/users/628138793458860033'><box-icon type='logo' name='discord-alt' size='md'></box-icon></a>
              <a href='https://www.linkedin.com/in/me-akshat-negi/'><box-icon type='logo' name='linkedin-square' size='md'></box-icon></a>
              <a href='https://github.com/Akshat-NegI27'><box-icon type='logo' name='github' size='md'></box-icon></a>
            </div>
          </div>
          <div className="service_area">
            <ul className="service_header">
              <li className="service_name">Courses</li>
              <li><a href='#'>Beginner's Guide</a></li>
              <li><a href='#'>Advanced Strategies</a></li>
              <li><a href='#'>Market Analysis</a></li>
              <li><a href='#'>Investment Planning</a></li>
            </ul>
            <ul className="service_header">
              <li className="service_name">Resources</li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Webinars</a></li>
              <li><a href='#'>E-books</a></li>
              <li><a href='#'>Support</a></li>
            </ul>
            <ul className="service_header">
              <li className="service_name">Company</li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Careers</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Legal</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>

        <div className="footer_bottom">
          <div className="copy_right">
            <box-icon name='copyright' ></box-icon>
            <span>2025 MVM EDUCATION</span>
          </div>
          <div className="tou">
            <a href='#'>Terms of Use</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
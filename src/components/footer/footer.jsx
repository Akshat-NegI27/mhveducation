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
              <p>We are the leading Trading Institute in Dehradun, having a great infrastructure, reliable teaching methods, and experienced staff in our organization.</p>
              <h2>Office Address:</h2>
              <p>
              Iksana Workspaces, Anand Arcade, Kishanpur, Dehradun, Uttarakhand 248001</p>
            </div>
            <div className="social_media">
              <a href='https://steamcommunity.com/id/akyboy27/'><box-icon type='logo' name='steam' size='md' ></box-icon></a>
              <a href='https://www.facebook.com/mhveducation/'><box-icon type='logo' name='facebook' size='md'></box-icon></a>
              <a href='https://www.instagram.com/mhveducation/'><box-icon type='logo' name='instagram' size='md'></box-icon></a>
              <a href='https://www.linkedin.com/company/mhv-education/'><box-icon type='logo' name='linkedin-square' size='md'></box-icon></a>
              <a href='https://github.com/Akshat-NegI27'><box-icon type='logo' name='github' size='md'></box-icon></a>
            </div>
          </div>
          <div className="service_area">
            <ul className="service_header">
              <li className="service_name">Courses</li>
              <li><a href='#'>Beginner Technical Analysis Course</a></li>
              <li><a href='#'>Advanced Technical Analysis Course</a></li>
              <li><a href='#'>Intraday Strategy Course</a></li>
              <li><a href='#'>Elliott Wave Program</a></li>
              <li><a href='#'>Chartered Market Technician (CMT)</a></li>

            </ul>
            <ul className="service_header">
              <li className="service_name">Resources</li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Courses</a></li>
              <li><a href='#'>Fee Structure</a></li>
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
        <div className="footer_bottom">
        <hr></hr>
        <div className="below">
          <div className="copy_right">
            <box-icon name='copyright' ></box-icon>
            <span>2025 MHV Education</span>
          </div>
            <div className="tou">
              <a href='#'>Terms of Use</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
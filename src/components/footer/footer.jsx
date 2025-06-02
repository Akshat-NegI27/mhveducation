import "./footer.css";
import "boxicons";
import { Link } from "react-router-dom";
import logo from "/assets/img/thelogo2.webp";

const Footer = () => {
  return (
    <footer>
      <div className="containerx">
        <div className="content_footer">
          <div className="profil">
            <div className="logo_area">
              <img src={logo} alt="MVM EDUCATION Logo" />
              {}
            </div>
            <div className="desc_area">
              <p>
                We are the leading Trading Institute in Dehradun, having a great
                infrastructure, reliable teaching methods, and experienced staff
                in our organization.
              </p>
              <h2>Office Address:</h2>
              <p>
                Iksana Workspaces, Anand Arcade, Kishanpur, Dehradun,
                Uttarakhand 248001
              </p>
            </div>
            <div className="social_media">
              <a
                href="https://www.facebook.com/mhveducation/"
                aria-label="Facebook - MHV Education"
              >
                <svg
                  width="36"
                  height="36"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="box-icon"
                >
                  <path d="M12 2.06c-5.5 0-10 4.5-10 10 0 4.94 3.61 9.06 8.33 9.89l.06-.05h-.06v-7.06h-2.5v-2.78h2.5V9.84c0-2.5 1.61-3.89 3.89-3.89.72 0 1.5.11 2.22.22v2.56h-1.28c-1.22 0-1.5.61-1.5 1.39v1.94h2.67l-.44 2.78h-2.22v7.06h-.06l.06.05c4.72-.83 8.33-4.94 8.33-9.89 0-5.5-4.5-10-10-10" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mhveducation/"
                aria-label="Instagram - MHV Education"
              >
                <svg
                  width="36"
                  height="36"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  transform=""
                  id="injected-svg"
                  className="box-icon"
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008M16.806 6.129a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156" />
                  <path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.61 4.61 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 2.99 2.99 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 2.99 2.99 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/mhv-education/"
                aria-label="LinkedIn - MHV Education"
              >
                <svg
                  width="36"
                  height="36"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  transform=""
                  id="injected-svg"
                  className="box-icon"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="service_area">
            <ul className="service_header">
              <ul className="service_header">
                <li className="service_name">Courses</li>
                <li>
                  <a
                    href="/assets/courses/Beginner_Technical_Analysis_Course_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Beginner Technical Analysis Course
                  </a>
                </li>
                <li>
                  <a
                    href="/assets/courses/Advanced_Technical_Analysis_Course_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Advanced Technical Analysis Course
                  </a>
                </li>
                <li>
                  <a
                    href="/assets/courses/Intraday_Strategies_Program_Course_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Intraday Strategy Course
                  </a>
                </li>
                <li>
                  <a
                    href="/assets/courses/Elliott_Wave_Theory_Course_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Elliott Wave Program
                  </a>
                </li>
                <li>
                  <a
                    href="/assets/courses/Chartered_Market_Technician_CMT_Course_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chartered Market Technician (CMT)
                  </a>
                </li>
              </ul>
            </ul>
            <ul className="service_header">
              <li className="service_name">Resources</li>
              <li>
                <a
                  href="https://medium.com/@mhveducation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link to="/courses">Fee Structure</Link>
              </li>
              <li>
                <Link to="/contact">Support</Link>
              </li>
            </ul>
            <ul className="service_header">
              <li className="service_name">Company</li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <hr></hr>
          <div className="below">
            <div className="copy_right">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                transform=""
                id="injected-svg"
              >
                <path d="M12 2C6.58 2 2 6.58 2 12s4.58 10 10 10 10-4.58 10-10S17.42 2 12 2m0 18c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8-3.66 8-8 8" />
                <path d="M12 9c.99 0 1.85.26 2.29.71L15.7 8.3c-1.12-1.12-2.81-1.29-3.71-1.29-2.76 0-5 2.24-5 5s2.24 5 5 5c.9 0 2.58-.17 3.71-1.29l-1.41-1.42c-.44.44-1.3.71-2.29.71-1.63 0-3-1.37-3-3s1.37-3 3-3Z" />
              </svg>
              <span>2025 MHV Education</span>
            </div>
            <div className="tou">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

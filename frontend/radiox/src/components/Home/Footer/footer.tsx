
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import twitterIcon from "/Users/marve/Desktop/Web Design Final Project/final-project-raps/frontend/radiox/src/images/twitter-icon.png";
import InstagramIcon from "/Users/marve/Desktop/Web Design Final Project/final-project-raps/frontend/radiox/src/images/Instagram.jpg";
import facebookIcon from "/Users/marve/Desktop/Web Design Final Project/final-project-raps/frontend/radiox/src/images/facebook.jpg";
import youtubeIcon from "/Users/marve/Desktop/Web Design Final Project/final-project-raps/frontend/radiox/src/images/youtube.jpg";

const MainSections: React.FC = () => {
  return (
    <div className="main-sections-container">
      
      <section>
        <h1>qure.ai</h1>
        <p>Qure.ai Technologies Private Limited</p>
        <p className="qure-para">
          Qure.ai was founded in 2016. Our mission is to use artificial
          intelligence to make healthcare more accessible and affordable.
        </p>
        
        <div className="follow-us">
          <p>Follow us</p>
          <div className="icons-container">
            
            <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>

            
            <a href="https://www.linkedin.com/company/example" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" />
            </a>

           
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>

            
            <a href="https://www.youtube.com/c/example" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Products</h2>
        <ul>
          <li><Link to="/chest-x-ray-reporting">Chest X-ray Reporting</Link></li>
          <li><Link to="/tb-care-cascades">TB Care Cascades</Link></li>
          <li><Link to="/lung-nodule-management">Lung Nodule Management</Link></li>
          <li><Link to="/stroke-tbi">Stroke & TBI</Link></li>
          <li><Link to="/msk-x-ray-reporting">MSK X-Ray Reporting</Link></li>
          <li><Link to="/heart-failure">Heart Failure</Link></li>
          <li><Link to="/qure-ai-app">Qure AI App</Link></li>
        </ul>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About</h2>
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/our-team">Our Team</Link></li>
          <li><Link to="/our-investors">Our Investors</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </section>

      {/* Knowledge Center Section */}
      <section className="knowledge">
        <h2>Knowledge Center</h2>
        <ul>
          <li><Link to="/news-and-press">News and Press</Link></li>
          <li><Link to="/impact">Impact</Link></li>
          <li><Link to="/evidence">Evidence</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/webinars">Webinars</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default MainSections;

// Navbar.js
import React from 'react';
import './Navbar.css';
import navlogo from './navlogo.jpeg';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="Qure Logo" width={50} height={'auto'} />
      <div>
        <div className="dropdown">
          <span className="dropbtn">
          Products &nbsp; <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 12 15 18 9"></polyline>
</svg>
          </span>
          <div className="dropdown-content">
  <a href="#">
    <p>Chest radiography (CXR)</p>
  </a>
  <a href="#">
    <p>Posterior-anterior (PA) - TB</p>
  </a>
  <a href="#">
    <p>Computed tomography (CT) - Lung</p>
  </a>
  <a href="#">
    <p>Cerebrovascular</p>
  </a>
  <a href="#">
    <p>Musculoskeletal Imaging and Intervention</p>
  </a>
  <a href="#">
    <p>Coronary angiogram</p>
  </a>
</div>

        </div>
        <span>Impact</span>
        <span>Contact Us</span>
        <button>Patient Portal</button>
        <button>Doctor Portal</button>
        <button>Admin portal</button>
        <span>Global</span>
      </div>
    </div>
  );
};

export default Navbar;
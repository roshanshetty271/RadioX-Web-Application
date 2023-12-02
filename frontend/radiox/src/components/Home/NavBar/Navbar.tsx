// Navbar.js
import React from 'react';
import './Navbar.css';
import navlogo from './navlogo.jpeg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="Qure Logo" width={50} height={'auto'}/>
      <div>
      <span>Products</span>
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

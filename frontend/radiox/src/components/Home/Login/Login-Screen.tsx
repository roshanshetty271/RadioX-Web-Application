
import React, { useState, useEffect } from 'react';
import './Login-Screen.css'; 
import Image1 from '../../../images/patient-login.png';
import Image2 from '../../../images/patient-login2.png';
import Image3 from '../../../images/patient-login3.png';
import NavLogo from '../../../images/Radiox-logo.png'; 

const textData = [
  "Fast and accurate reporting with intelligent tools",
  "Connect and collaborate with the Radiox Team",
  "Instant access to any of our intelligence tools",
];

const AppContainer: React.FC = () => {
 
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Image1, Image2, Image3]; 

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  
  const handleDotClick = (index: number) => {
    setCurrentImage(index);
  };

  
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
  };

  return (
    <div className="app-container">
      
     

      
      <img src={NavLogo} alt="NavLogo" className="nav-logo" />

      
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="image-text">
              {index === currentImage && textData[currentImage]}
            </div>
          </div>
        ))}
        <div className="dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={index === currentImage ? 'active' : ''}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      
      <div className="login-container">
        
        <h2>Login to RadioX</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Loginscreen.css';
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
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [error, setError] = useState(false); // New state for error
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
    setError(false); // Reset error status

    // Retrieve the stored credentials from local storage
    const storedCredentialsString = localStorage.getItem('userCredentials');

    if (storedCredentialsString) {
      const storedCredentials = JSON.parse(storedCredentialsString);

      // Check if the entered credentials are valid
      const enteredUsername = (event.target as any).username.value;
      const enteredPassword = (event.target as any).password.value;

      if (storedCredentials.username === enteredUsername && storedCredentials.password === enteredPassword) {
        // Store user information in local storage
        localStorage.setItem('username', storedCredentials.username);

        // Navigate to /patient
        navigate('/patient');
      } else {
        setError(true); // Set error status for invalid credentials
      }
    } else {
      console.log('No user credentials found');
    }
  };

  return (
    <div className="app-container">
      <Link to="/">
        <img src={NavLogo} alt="NavLogo" className="nav-logo" />
      </Link>
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
        {/* Display error message if error state is true */}
        {error && <div className="error-message">Invalid username or password</div>}
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
          Don't have an account? <Link to="/signup">Sign Up </Link>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;

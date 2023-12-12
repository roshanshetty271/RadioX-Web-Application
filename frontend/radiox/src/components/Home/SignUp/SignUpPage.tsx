import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserData } from './store';

import './SignUpPage.css';
import radioXImage from '../../../images/Radiox-logo.png'; 

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    gender: '',
    symptoms: '',
    username: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the error message when the user starts typing in the field
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!validateForm()) {
      return;
    }

    // Assuming formData is your input data
    dispatch(setUserData(formData));
    // Add logic here to handle form submission, like API calls or validation
    console.log('Form submitted:', formData);

    // Assume successful signup and navigate to the patient UI page
    navigate('/patient', { state: { name: formData.name } });
  };

  const validateForm = () => {
    // Add your validation logic here
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let valid = true;

    if (!nameRegex.test(formData.name)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, name: 'Please enter a valid name' }));
      valid = false;
    }

    if (!phoneRegex.test(formData.phoneNumber)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, phoneNumber: 'Please enter a valid 10 phone number' }));
      valid = false;
    }

    if (!passwordRegex.test(formData.password)) {
      setFormErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 8 characters and include at least one letter and one number' }));
      valid = false;
    }

    // Add more validations as needed

    return valid;
  };

  return (
    <div className="signup-page">
     <Link to="/">
        <img src={radioXImage} alt="RadioX Logo" className="radiox-logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-column">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          {formErrors.name && <span className="error-message">{formErrors.name}</span>}

          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          {formErrors.phoneNumber && <span className="error-message">{formErrors.phoneNumber}</span>}

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-column">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="symptoms">Symptoms:</label>
          <input type="text" id="symptoms" name="symptoms" value={formData.symptoms} onChange={handleChange} required />

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          {formErrors.password && <span className="error-message">{formErrors.password}</span>}
        </div>

        <div className="bottom-column">
          {/* Move the button inside the form */}
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
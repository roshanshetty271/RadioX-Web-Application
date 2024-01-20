// Logout.tsx

import React from 'react';
import PropTypes from 'prop-types';
import './Logout.css';
import { useNavigate } from 'react-router-dom';
import clinicLogo from '../../../images/Radiox-logo.png';

interface LogoutProps {
  onLogout: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearSession(); 
    onLogout();
    navigate('/login');
  };

  const clearSession = () => {
    localStorage.removeItem('adminToken');
  };

  return (
    <div className="logout">
      <img src={clinicLogo} alt="Clinic Logo" />
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Logout;

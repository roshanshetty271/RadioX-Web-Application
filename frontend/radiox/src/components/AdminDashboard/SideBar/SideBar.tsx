// Sidebar.tsx

import React, { useState } from 'react';
import './SideBar.css';
import adminPhoto from '../../../images/ADMIN3.jpg';
import clinicLogo from '../../../images/Radiox-logo.png';

interface SidebarProps {
  onSectionClick: (section: string) => void;
  onDashboardClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSectionClick, onDashboardClick }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleItemClick = (section: string) => {
    onSectionClick(section);
  };

  const handleDashboardClick = () => {
    setIsExpanded(true);
    onDashboardClick && onDashboardClick();
  };

  return (
    <div className={`sideBar ${isExpanded ? 'expanded' : ''}`}>
      <div className='clinic-logo'>
         <img className="clinic-logo" src={clinicLogo} alt="Clinic Logo" /> 
      </div>
      <div className="admin-section">
        <img className="admin-photo" src={adminPhoto} alt="Admin's Profile" />
        <div className="admin-username">Leo Chen</div>
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={handleDashboardClick}>
          Dashboard
        </button>
        <button className="nav-button" onClick={() => handleItemClick('doctor')}>
          Doctor
        </button>
        <button className="nav-button" onClick={() => handleItemClick('patient')}>
          Patient
        </button>
        <button className="nav-button" onClick={() => handleItemClick('logout')}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

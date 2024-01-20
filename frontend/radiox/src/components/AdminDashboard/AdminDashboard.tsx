// AdminDashboard.tsx

import React, { useState } from 'react';
import './AdminDashboard.css';
import Sidebar from './SideBar/SideBar';
import Doctor from './Doctor/Doctor';
import Patient from './Patient/Patient';
//import ImagingResults from './Imaging Results/ImagingResults';
import Logout from './Logout/Logout';
//import UploadScans from './Upload Scans/UploadScans';
import Charts from './Charts/Charts';

const AdminDashboard: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    console.log(`Clicked on section: ${section}`);
    setSelectedSection(section);
  };

  const handleDashboardClick = () => {
    setSelectedSection('dashboard');
  };

  const handleLogout = () => {
    setSelectedSection('logout');
  };

  return (
    <div className="admin-dashboard">
      <Sidebar onSectionClick={handleSectionClick} onDashboardClick={handleDashboardClick} />
      {selectedSection === 'doctor' && <Doctor />}
      {selectedSection === 'patient' && <Patient />}
    
      {selectedSection === 'logout' && <Logout onLogout={handleLogout} />}
      
      {selectedSection === 'dashboard' && <Charts />}
    </div>
  );
};

export default AdminDashboard;

import React from 'react';
import Sidebar from '../components/Doctor Dashboard/Sidebar/Sidebar';
import Dashboard from '../components/Doctor Dashboard/Dashboard/Dashboard';

const DoctorPortal: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  );
};

export default DoctorPortal;

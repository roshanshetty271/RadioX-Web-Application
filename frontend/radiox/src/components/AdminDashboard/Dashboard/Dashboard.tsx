// Dashboard.tsx

import React from 'react';
import Charts from '../Charts/Charts'; 
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const patientList = ['Patient 1', 'Patient 2', 'Patient 3'];
  const totalAppointments = 25;
  const totalRevenue = '$500000';
  const scansDone = 0;
  const scansPending = 10;

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat-item">
          <p className="stat-label">Total Patients</p>
          <ul className="patient-list">
            {patientList.map((patient, index) => (
              <li key={index} className="patient-item">{patient}</li>
            ))}
          </ul>
        </div>
        <div className="stat-item">
          <p className="stat-label">Total Appointments</p>
          <p className="stat-value">{totalAppointments}</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Total Revenue</p>
          <p className="stat-value">{totalRevenue}</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Scans Done</p>
          <p className="stat-value">{scansDone}</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Scans Pending</p>
          <p className="stat-value">{scansPending}</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Charts</p>
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

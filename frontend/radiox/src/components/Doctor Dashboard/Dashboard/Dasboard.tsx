// Dashboard.tsx

import React from 'react';
import './Dashboard.css';

interface DashboardProps {
  // Add any additional props you may need
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="dashboard">
      <h2>Hello, John</h2>

      {/* First Row */}
      <div className="card-container">
        <div className="card blue-card">
          <h3 className="white-text">Summary</h3>
          <div className="action-buttons">

<div className="action-buttons">
  <button className="button primary-button">View Details2</button>
  <button className="button secondary-button">Action 3</button>
</div>

          </div>
        </div>
        <div className="card">
          <div className="clinical-tests">
            <div>
              <h3>Clinical Test 1</h3>
              <p>Description of Clinical Test 1</p>
            </div>
            <div>
              <h3>Clinical Test 2</h3>
              <p>Description of Clinical Test 2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="card progress-bar-card">
        <span>X-Ray Count</span>
        <div className="stats">
          <div>
            <h3>Title 1</h3>
            <p>Count 1</p>
          </div>
          <div>
            <h3>Title 2</h3>
            <p>Count 2</p>
          </div>
          <div>
            <h3>Title 3</h3>
            <p>Count 3</p>
          </div>
          <div>
            <h3>Title 4</h3>
            <p>Count 4</p>
          </div>
        </div>
      </div>

      {/* Third Row - Three Cards */}
      <div className="card-container">
        {[1, 2, 3].map((cardIndex) => (
          <div key={cardIndex} className="card">
            <div className="clinical-tests">
              <div>
                <h3>Clinical Test {cardIndex * 3 - 2}</h3>
                <p>Description of Clinical Test {cardIndex * 3 - 2}</p>
              </div>
              <div>
                <h3>View Details</h3>
                <p>Description of Clinical Test {cardIndex * 3}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

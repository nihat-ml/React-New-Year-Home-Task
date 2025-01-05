import React from 'react';
import './DashBoard.css';

function DashBoard() {
  return (
    <div className="dashboard-container">
      <div className="welcome-message">
        <h1>Welcome Admin</h1>
        <p>You're logged in as the administrator. Manage your products and settings.</p>
      </div>
    </div>
  );
}

export default DashBoard;

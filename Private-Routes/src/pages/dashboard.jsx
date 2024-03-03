import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <p className="dashboard-text">Welcome to the <strong>dashboard!</strong></p>
      <br/>
      <p className="dashboard-text">This Page should be Protected by <strong>Private Route</strong></p>
    </div>
  );
};

export default Dashboard;

// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Get username from state or fallback to localStorage
    const storedUsername = location.state?.username || localStorage.getItem('username');
    setUsername(storedUsername || '');
  }, [location.state]);

  const handleViewSchedule = () => {
    navigate('/schedule', { state: { username } });
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>User: {username}</p>
      <button onClick={handleViewSchedule}>View My Schedule</button>
    </div>
  );
}

export default Dashboard;

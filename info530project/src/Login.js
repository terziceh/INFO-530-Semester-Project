// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userType, setUserType] = useState('student');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('User Type:', userType);
    console.log('User ID submitted:', userId);
    console.log('Password submitted:', password);

    // Navigate to the dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <input
              type="radio"
              value="student"
              checked={userType === 'student'}
              onChange={() => setUserType('student')}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              value="instructor"
              checked={userType === 'instructor'}
              onChange={() => setUserType('instructor')}
            />
            Instructor
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userType, setUserType] = useState('student');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validatePassword = () => {
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return false;
    }
    if (!/[a-zA-Z]/.test(password)) {
      setErrorMessage('Password must contain at least one letter.');
      return false;
    }
    if (!/\d/.test(password)) {
      setErrorMessage('Password must contain at least one number.');
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorMessage('Password must contain at least one special character.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword()) {
      return;
    }
    // Perform login logic here  
    console.log('User Type:', userType);
    console.log('User ID submitted:', userId);
    console.log('Password submitted:', password);

    // Navigate to dashboard with userId
    navigate('/dashboard', { state: { username: userId } });
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
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
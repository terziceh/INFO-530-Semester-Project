// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import Schedule from './Schedule'; // This should match src/Schedule.js
import StudentCourseView from './StudentCourseView';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/studentCourse" element={<StudentCourseView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


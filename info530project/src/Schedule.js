// src/Schedule.js
import React from 'react';
import './Schedule.css';
import { useLocation, useNavigate } from 'react-router-dom';

const studentSchedules = {
  terziceh: [
    {
      course: "CSCI 101",
      name: "Intro to Computer Science",
      section: "001",
      room: "ENGR 210",
      days: "Mon, Wed, Fri",
      time: "9:00 AM – 9:50 AM"
    },
    {
      course: "MATH 201",
      name: "Calculus I",
      section: "002",
      room: "HIBB 101",
      days: "Tue, Thu",
      time: "11:00 AM – 12:15 PM"
    }
  ]
};

const Schedule = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username?.toLowerCase();

  const schedule = studentSchedules[username] || [];

  return (
    <div className="container">
      <h2>My Course Schedule</h2>
      {schedule.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Course #</th>
                <th>Name</th>
                <th>Section</th>
                <th>Room</th>
                <th>Days</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((course, idx) => (
                <tr key={idx}>
                  <td>{course.course}</td>
                  <td>{course.name}</td>
                  <td>{course.section}</td>
                  <td className="course-room">{course.room}</td>
                  <td>{course.days}</td>
                  <td>{course.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        </>
      ) : (
        <p>No schedule available for this user.</p>
      )}
    </div>
  );
};

export default Schedule;

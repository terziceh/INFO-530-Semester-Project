// src/Schedule.js
import React from 'react';
import './Schedule.css';
import { useLocation, useNavigate } from 'react-router-dom';

// Simulated data (this can be replaced by API data later)
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
  ],
};

const Schedule = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username?.toLowerCase();

  // ⚡ This simulates pulling the student's data from an API by key
  const schedule = studentSchedules[username] || [];

  return (
    <div className="container p-6">
      <h2 className="text-2xl font-bold mb-4">My Course Schedule</h2>

      {schedule.length > 0 ? (
        <>
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">Course #</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Section</th>
                <th className="py-2 px-4 border-b">Room</th>
                <th className="py-2 px-4 border-b">Days</th>
                <th className="py-2 px-4 border-b">Time</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((course, idx) => (
                <tr key={idx}>
                  <td className="py-2 px-4 border-b">{course.course}</td>
                  <td className="py-2 px-4 border-b">{course.name}</td>
                  <td className="py-2 px-4 border-b">{course.section}</td>
                  <td className="py-2 px-4 border-b">{course.room}</td>
                  <td className="py-2 px-4 border-b">{course.days}</td>
                  <td className="py-2 px-4 border-b">{course.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Back to Dashboard Button */}
          <div className="mt-6">
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              ← Back to Dashboard
            </button>
          </div>
        </>
      ) : (
        <p className="text-red-600 font-medium">No schedule available for this user.</p>
      )}
    </div>
  );
};

export default Schedule;

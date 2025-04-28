// src/StudentCourseView.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentCourseView.css'; // Ensure this file exists or remove this line if not needed

const StudentCourseView = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'CSCI 101',
      name: 'Intro to Computer Science',
      instructor: 'Dr. Smith',
      credits: 3,
      description: 'Learn the basics of programming, algorithms, and computer systems.'
    },
    {
      id: 'MATH 201',
      name: 'Calculus I',
      instructor: 'Prof. Johnson',
      credits: 4,
      description: 'Study limits, derivatives, and integrals of functions.'
    }
  ];

  return (
    <div className="course-view-container">
      <h2>My Courses</h2>
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <h3>{course.name} ({course.id})</h3>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Credits:</strong> {course.credits}</p>
          <p><strong>Description:</strong> {course.description}</p>
        </div>
      ))}
      <br />
      <button onClick={() => navigate('/schedule')}>Back to Schedule</button>
    </div>
  );
};

export default StudentCourseView;
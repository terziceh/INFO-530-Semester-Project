const db = require('./db');

const Course = {
  findByStudentId: (studentId, callback) => {
    const query = `
      SELECT courses.course_number, courses.course_name, courses.section_number, 
             courses.meeting_room, courses.meeting_days, courses.meeting_times 
      FROM courses 
      JOIN enrollments ON courses.id = enrollments.course_id
      WHERE enrollments.student_id = ?`;
    db.query(query, [studentId], callback);
  },
};

module.exports = Course;
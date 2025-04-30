const db = require('./db');

const Student = {
  findByStudentId: (studentId, callback) => {
    const query = 'SELECT * FROM students WHERE student_id = ?';
    db.query(query, [studentId], callback);
  },
};

module.exports = Student;
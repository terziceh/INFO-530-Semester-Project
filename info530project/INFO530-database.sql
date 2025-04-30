-- USERS TABLE
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  role ENUM('student', 'instructor') NOT NULL
);

INSERT INTO users (username, password, role) VALUES
('terziceh', 'Password123!', 'student'),
('jdoe', 'Pass456!', 'student'),
('asmith', 'AlphaPass1!', 'student'),
('btran', 'Beta$789', 'student'),
('clee', 'Gamma@2023', 'student'),
('mjackson', 'Delta_321', 'student'),
('nmartin', 'Omega#55', 'student'),
('rpatel', 'Phi!999', 'student'),
('kchung', 'Zeta%000', 'student'),
('drsmith', 'SecurePass456!', 'instructor'),
('profjohnson', 'Teach789!', 'instructor');

-- COURSES TABLE
CREATE TABLE courses (
  id VARCHAR(10) PRIMARY KEY,
  name VARCHAR(100),
  instructor VARCHAR(100),
  credits INT,
  description TEXT
);

INSERT INTO courses (id, name, instructor, credits, description) VALUES
('CSCI 101', 'Intro to Computer Science', 'Dr. Smith', 3, 'Learn the basics of programming, algorithms, and computer systems.'),
('MATH 201', 'Calculus I', 'Prof. Johnson', 4, 'Study limits, derivatives, and integrals of functions.'),
('ENG 150', 'English Composition', 'Dr. Smith', 3, 'Develop writing and critical thinking skills.'),
('HIST 210', 'World History', 'Prof. Johnson', 3, 'Examine global history from ancient to modern times.'),
('BIO 101', 'General Biology', 'Dr. Smith', 4, 'Introduction to biological principles.'),
('CHEM 120', 'General Chemistry', 'Prof. Johnson', 4, 'Basic concepts in chemistry and lab work.'),
('PHYS 110', 'Intro to Physics', 'Dr. Smith', 4, 'Fundamentals of mechanics and motion.'),
('ART 105', 'Art Appreciation', 'Prof. Johnson', 3, 'Explore artistic movements and critical analysis.'),
('PSY 200', 'Psychology', 'Dr. Smith', 3, 'Introduction to psychological theories and research.'),
('CSCI 202', 'Data Structures', 'Prof. Johnson', 3, 'Study of lists, trees, queues, and algorithms.');

-- SCHEDULES TABLE
CREATE TABLE schedules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_username VARCHAR(50),
  course_id VARCHAR(10),
  section VARCHAR(10),
  room VARCHAR(50),
  days VARCHAR(50),
  time VARCHAR(50),
  FOREIGN KEY (student_username) REFERENCES users(username),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);

INSERT INTO schedules (student_username, course_id, section, room, days, time) VALUES
('terziceh', 'CSCI 101', '001', 'ENGR 210', 'Mon, Wed, Fri', '9:00 AM – 9:50 AM'),
('terziceh', 'MATH 201', '002', 'HIBB 101', 'Tue, Thu', '11:00 AM – 12:15 PM'),
('jdoe', 'ENG 150', '001', 'HUM 103', 'Mon, Wed', '10:00 AM – 11:15 AM'),
('asmith', 'HIST 210', '002', 'HIST 201', 'Tue, Thu', '9:30 AM – 10:45 AM'),
('btran', 'BIO 101', '001', 'SCI 110', 'Mon, Wed, Fri', '1:00 PM – 1:50 PM'),
('clee', 'CHEM 120', '001', 'CHEM 201', 'Tue, Thu', '2:00 PM – 3:15 PM'),
('mjackson', 'PHYS 110', '001', 'PHYS 101', 'Mon, Wed', '12:00 PM – 1:15 PM'),
('nmartin', 'ART 105', '001', 'ART 202', 'Tue, Thu', '3:30 PM – 4:45 PM'),
('rpatel', 'PSY 200', '001', 'SOC 105', 'Mon, Wed, Fri', '11:00 AM – 11:50 AM'),
('kchung', 'CSCI 202', '001', 'ENGR 212', 'Mon, Wed', '4:00 PM – 5:15 PM');

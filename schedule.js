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
  // Add more users if needed
};

function handleLogin() {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const errorDiv = document.getElementById('error');
  const scheduleDiv = document.getElementById('schedule-container');
  const scheduleBody = document.getElementById('schedule-body');

  if (studentSchedules[username]) {
    errorDiv.classList.add('hidden');
    scheduleDiv.classList.remove('hidden');

    scheduleBody.innerHTML = ""; // Clear any old data

    studentSchedules[username].forEach(course => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${course.course}</td>
        <td>${course.name}</td>
        <td>${course.section}</td>
        <td class="course-room">${course.room}</td>
        <td>${course.days}</td>
        <td>${course.time}</td>
      `;
      scheduleBody.appendChild(row);
    });
  } else {
    errorDiv.classList.remove('hidden');
    scheduleDiv.classList.add('hidden');
  }
}

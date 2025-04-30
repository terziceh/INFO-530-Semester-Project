const express = require('express');
const app = express();
const studentRoutes = require('./studentRoutes');
const courseRoutes = require('./courseRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set('view engine', 'ejs');

// Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
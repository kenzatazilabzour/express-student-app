const express = require('express');
const app = express();

// Mock data for students
const students = [
  { id: 1, name: 'Kenza', age: 28 },
  { id: 2, name: 'Sara', age: 26 },
  { id: 3, name: 'Rizzy', age: 30 },
];

// Route to get all students
app.get('/students', function (req, res) {
  res.render('students/index', {students});
});

// Start the server
app.listen(3000, function()  {
  console.log(`Server is running on port 3000`);
});

// Route to get a specific student by ID
app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(student => student.id === id);
  if (student) {
    res.render('student', { student });
  } else {
    res.status(404).send('Student not found');
  }
  res.render('students/show', { student });
});

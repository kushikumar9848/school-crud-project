
// backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kushi@98',
    database: 'school_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected');
});

// Get all students
app.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a student
app.post('/students', (req, res) => {
    const { name, course, grade } = req.body;
    db.query('INSERT INTO students (name, course, grade) VALUES (?, ?, ?)', 
    [name, course, grade], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Student added successfully' });
    });
});

// Update a student
app.put('/students/:id', (req, res) => {
    const { id } = req.params;
    const { name, course, grade } = req.body;
    db.query('UPDATE students SET name=?, course=?, grade=? WHERE id=?',
    [name, course, grade, id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Student updated successfully' });
    });
});

// Delete a student
app.delete('/students/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM students WHERE id=?', [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Student deleted successfully' });
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));

// server.js

const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: 'password', // Your MySQL password
    database: 'workshop_db' // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL');
});

// 1. Create - Add a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.status(201).send({ id: result.insertId, name, email });
    });
});

// 2. Read - Get all users
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.send(results);
    });
});

// 3. Read - Get a specific user by ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.send(result[0]);
    });
});

// 4. Update - Update a user’s information
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(sql, [name, email, id], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.send({ id, name, email });
    });
});

// 5. Delete - Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(err.message);
            return;
        }
        res.send({ message: 'User deleted successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

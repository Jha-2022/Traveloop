const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database('./traveloop.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      lastName TEXT,
      email TEXT UNIQUE,
      password TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS trips (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      "Start Date" TEXT,
      "Select a Place" TEXT,
      "End Date" TEXT,
      FOREIGN KEY(userId) REFERENCES users(id)
    )`, (err) => {
      if (err) {
        console.error('Error creating trips table:', err.message);
      }
    });
  }
});

// Signup Endpoint
app.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  const query = `INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;
  db.run(query, [firstName, lastName, email, password], function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ error: 'Email already registered' });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, message: 'User registered successfully' });
  });
});

// Signin Endpoint
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  
  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.get(query, [email, password], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.status(200).json({ 
      id: user.id, 
      firstName: user.firstName, 
      lastName: user.lastName, 
      email: user.email,
      message: 'Sign in successful' 
    });
  });
});

// Trip Endpoint
app.post('/trips', (req, res) => {
  console.log('Received trip request:', req.body);
  const { userId, startDate, place, endDate } = req.body;
  const query = `INSERT INTO trips (userId, "Start Date", "Select a Place", "End Date") VALUES (?, ?, ?, ?)`;
  db.run(query, [userId, startDate, place, endDate], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, message: 'Trip planned successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

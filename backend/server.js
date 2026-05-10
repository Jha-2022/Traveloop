// const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Initialize SQLite database
// const db = new sqlite3.Database('./traveloop.db', (err) => {
//   if (err) {
//     console.error('Error opening database:', err.message);
//   } else {
//     console.log('Connected to the SQLite database.');
//     db.run(`CREATE TABLE IF NOT EXISTS users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       firstName TEXT,
//       lastName TEXT,
//       email TEXT UNIQUE,
//       password TEXT
//     )`);

//     db.run(`CREATE TABLE IF NOT EXISTS trips (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       userId INTEGER,
//       "Start Date" TEXT,
//       "Select a Place" TEXT,
//       "End Date" TEXT,
//       FOREIGN KEY(userId) REFERENCES users(id)
//     )`, (err) => {
//       if (err) {
//         console.error('Error creating trips table:', err.message);
//       }
//     });
//   }
// });

// // Signup Endpoint
// app.post('/signup', (req, res) => {
//   const { firstName, lastName, email, password } = req.body;
  
//   const query = `INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;
//   db.run(query, [firstName, lastName, email, password], function(err) {
//     if (err) {
//       if (err.message.includes('UNIQUE constraint failed')) {
//         return res.status(400).json({ error: 'Email already registered' });
//       }
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(201).json({ id: this.lastID, message: 'User registered successfully' });
//   });
// });

// // Signin Endpoint
// app.post('/signin', (req, res) => {
//   const { email, password } = req.body;
  
//   const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
//   db.get(query, [email, password], (err, user) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid email or password' });
//     }
//     res.status(200).json({ 
//       id: user.id, 
//       firstName: user.firstName, 
//       lastName: user.lastName, 
//       email: user.email,
//       message: 'Sign in successful' 
//     });
//   });
// });

// // Trip Endpoint
// app.post('/trips', (req, res) => {
//   console.log('Received trip request:', req.body);
//   const { userId, startDate, place, endDate } = req.body;
//   const query = `INSERT INTO trips (userId, "Start Date", "Select a Place", "End Date") VALUES (?, ?, ?, ?)`;
//   db.run(query, [userId, startDate, place, endDate], function(err) {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.status(201).json({ id: this.lastID, message: 'Trip planned successfully' });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Database path
const dbPath = path.join(__dirname, 'traveloop.db');

// Connect database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to SQLite database.');

    // Users table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        email TEXT UNIQUE,
        password TEXT
      )
    `);

    // Trips table
    db.run(`
      CREATE TABLE IF NOT EXISTS trips (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tripId TEXT UNIQUE,
        userId INTEGER,
        name TEXT,
        start_date TEXT,
        place TEXT,
        end_date TEXT,
        duration TEXT,
        description TEXT,
        highlights TEXT,
        img TEXT,
        isPrevious INTEGER DEFAULT 0,
        FOREIGN KEY(userId) REFERENCES users(id)
      )
    `, () => {
      // Seed trips data from Profile page
      seedTrips();
    });
  }
});

// Seed default trips
function seedTrips() {
  db.get('SELECT COUNT(*) as count FROM trips', (err, row) => {
    if (err || row.count > 0) return; // Skip if already seeded

    const trips = [
      {
        tripId: 'tokyo-2025',
        userId: 1,
        name: 'Tokyo Adventure',
        start_date: 'Mar 12, 2025',
        place: 'Tokyo, Japan',
        end_date: 'Mar 19, 2025',
        duration: '7 Days',
        description: 'Explore the vibrant neon lights of Shinjuku, the traditional temples of Asakusa, and the world-class shopping in Ginza. A perfect blend of future and tradition.',
        highlights: JSON.stringify(['Robot Restaurant Show', 'Tsukiji Fish Market Breakfast', 'Mount Fuji Day Trip', 'Harajuku Street Style Tour']),
        img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
        isPrevious: 0
      },
      {
        tripId: 'paris-2025',
        userId: 1,
        name: 'Parisian Escape',
        start_date: 'June 05, 2025',
        place: 'Paris, France',
        end_date: 'June 10, 2025',
        duration: '5 Days',
        description: 'Experience the City of Light in all its glory. From the top of the Eiffel Tower to the hidden cafes of Montmartre.',
        highlights: JSON.stringify(['Louvre Private Tour', 'Seine River Dinner Cruise', 'Versailles Palace Visit', 'Croissant Baking Workshop']),
        img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        isPrevious: 0
      },
      {
        tripId: 'swiss-2023',
        userId: 1,
        name: 'Swiss Alps',
        start_date: 'Dec 15, 2023',
        place: 'Swiss Alps, Switzerland',
        end_date: 'Dec 25, 2023',
        duration: '10 Days',
        description: 'A winter wonderland adventure through Interlaken, Zermatt, and St. Moritz. Professional skiing and luxury fondue.',
        highlights: JSON.stringify(['Matterhorn Viewing', 'Glacier Express Ride', 'Night Sledding', 'Thermal Spa Relaxation']),
        img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
        isPrevious: 1
      },
      {
        tripId: 'bali-2023',
        userId: 1,
        name: 'Bali Retreat',
        start_date: 'Oct 01, 2023',
        place: 'Bali, Indonesia',
        end_date: 'Oct 15, 2023',
        duration: '14 Days',
        description: 'Spiritual rejuvenation in Ubud and beach bliss in Uluwatu. A deep dive into Balinese culture and nature.',
        highlights: JSON.stringify(['Sacred Monkey Forest', 'Tegalalang Rice Terrace', 'Surfing in Canggu', 'Sunrise Volcano Hike']),
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        isPrevious: 1
      },
      {
        tripId: 'nyc-2023',
        userId: 1,
        name: 'NYC Lights',
        start_date: 'Aug 10, 2023',
        place: 'New York City, USA',
        end_date: 'Aug 14, 2023',
        duration: '4 Days',
        description: 'The ultimate urban jungle experience. Broadway shows, Central Park strolls, and skyline views.',
        highlights: JSON.stringify(['Times Square at Night', 'Statue of Liberty Ferry', 'Top of the Rock View', 'Brooklyn Bridge Sunset Walk']),
        img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
        isPrevious: 1
      }
    ];

    const query = `
      INSERT INTO trips (tripId, userId, name, start_date, place, end_date, duration, description, highlights, img, isPrevious)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    trips.forEach(trip => {
      db.run(query, [
        trip.tripId, trip.userId, trip.name, trip.start_date,
        trip.place, trip.end_date, trip.duration, trip.description,
        trip.highlights, trip.img, trip.isPrevious
      ], (err) => {
        if (err) console.error('Seed error:', err.message);
      });
    });

    console.log('✅ Seeded 5 trips into database.');
  });
}

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Signup
app.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const query = `
    INSERT INTO users (firstName, lastName, email, password)
    VALUES (?, ?, ?, ?)
  `;

  db.run(query, [firstName, lastName, email, password], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      id: this.lastID,
      message: 'User registered successfully'
    });
  });
});

// Signin
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  const query = `
    SELECT * FROM users
    WHERE email = ? AND password = ?
  `;

  db.get(query, [email, password], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials'
      });
    }

    res.json(user);
  });
});

// Create trip
app.post('/trips', (req, res) => {
  console.log(req.body);

  const { tripId, userId, name, startDate, place, endDate, duration, description, highlights, img, isPrevious } = req.body;

  const query = `
    INSERT INTO trips (tripId, userId, name, start_date, place, end_date, duration, description, highlights, img, isPrevious)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [tripId, userId, name, startDate, place, endDate, duration, description, highlights, img, isPrevious || 0], function(err) {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: err.message
      });
    }

    res.status(201).json({
      id: this.lastID,
      message: 'Trip created successfully'
    });
  });
});

// Get all trips
app.get('/trips', (req, res) => {
  db.all('SELECT * FROM trips', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const trips = rows.map(row => ({
      ...row,
      highlights: JSON.parse(row.highlights || '[]'),
      isPrevious: row.isPrevious === 1,
      startDate: row.start_date,
      endDate: row.end_date
    }));

    res.json(trips);
  });
});

// Get single trip by tripId
app.get('/trips/:tripId', (req, res) => {
  db.get('SELECT * FROM trips WHERE tripId = ?', [req.params.tripId], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    res.json({
      ...row,
      highlights: JSON.parse(row.highlights || '[]'),
      isPrevious: row.isPrevious === 1,
      startDate: row.start_date,
      endDate: row.end_date
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
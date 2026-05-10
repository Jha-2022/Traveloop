# Traveloop
Traveloop is a comprehensive web application designed to streamline the travel experience by combining trip planning, expense management, and community interaction into a single platform. Built using the MERN stack (MongoDB, Express, React, and Node.js), it provides travelers with a suite of tools to organize their itineraries and share insights with a global network of users.

## Key Features
Trip Management: Create and manage detailed travel itineraries, including destination tracking and schedule organization.

Expense Tracker: A dedicated module to log and monitor travel spending, helping users stay within their budget while on the road.

Collaborative Checklists: Integrated packing and "to-do" lists to ensure no essential items or tasks are forgotten before or during a trip.

Trip Notes: A personalized space for users to record memories, important location details, or quick reminders.

Community Hub: A social platform where travelers can share their experiences, post updates, and discover tips from other members of the Traveloop community.

Personalized Profiles: Secure user authentication allowing travelers to maintain a history of their past trips and manage their public presence on the platform.


```
Traveloop/
├── .gitignore                          # Root-level git ignore rules
├── LICENSE                             # MIT License file
├── backend/                            # Server-side application
│   ├── package-lock.json               # Locked dependency versions
│   ├── package.json                    # Backend dependencies (express, sqlite3, cors)
│   ├── server.js                       # Express server and SQLite database logic
│   └── traveloop.db                    # SQLite database file (generated at runtime)
└── frontend/                           # Client-side React application
    ├── .gitignore                      # Frontend-specific ignore rules
    ├── README.md                       # Project documentation
    ├── eslint.config.js                # Linting configuration
    ├── index.html                      # Entry HTML file
    ├── package-lock.json               # Locked dependency versions
    ├── package.json                    # Frontend dependencies and scripts
    ├── vite.config.js                  # Vite build configuration
    ├── public/                         # Static assets
    │   ├── avatar.png                  # User profile placeholder
    │   ├── favicon.svg                 # Browser tab icon
    │   └── icons.svg                   # Sprite for UI icons
    └── src/                            # Application source code
        ├── App.css                     # Global application styles
        ├── App.jsx                     # Root component and routing logic
        ├── index.css                   # Tailwind or base CSS styles
        ├── main.jsx                    # Application entry point
        ├── assets/                     # Source-managed assets
        │   └── vite.svg                # Vite logo
        ├── components/                 # Reusable UI components
        │   └── navbar.jsx              # Navigation bar component
        └── pages/                      # Individual route components
            ├── Checklist.jsx           # Travel packing checklist page
            ├── Community.jsx           # Social/Community feed page
            ├── CreateTrip.jsx          # Trip planning form
            ├── Home.jsx                # User dashboard
            ├── Landingpage.jsx         # Main welcome/marketing page
            ├── Profile.jsx             # User account settings
            ├── Signin.jsx              # Login page
            ├── Signup.css              # Styles for the registration page
            └── Signup.jsx              # Registration page component```


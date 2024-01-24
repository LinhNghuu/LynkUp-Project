// Importing necessary modules
const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');

const methodOverride = require('method-override');
const port = 3000;

// Load environment variables from .env file
require('dotenv').config({ path: '.env' });

// Connect to the database
const db = require('./config/db');
db.connect();
// Initialize auth service here

// Middleware for parsing JSON data in requests
app.use(express.json());

// Session middleware configuration
app.use(session({
  secret: 'your-secret-key', // Replace with your own secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));
// Middleware to ensure user is logged in
function ensureLogin(req, res, next) {
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    next();
  }
}

// Middleware to make session available in all views
app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.isLoggedIn = req.session.user ? true : false; // Add isLoggedIn flag
  next();
});

// Middleware for parsing URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to allow HTTP verb (method) override, useful for supporting PUT/DELETE where client doesn't support it
app.use(methodOverride('_method'));

// Importing and setting up routes
const route = require('./routes');

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set the views directory for EJS templates
app.set('views', path.join(__dirname, 'resources', 'views'));

// Serve static files (CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Initialize routes
route(app);

// Middleware to handle 404 errors (Page Not Found)
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`App listening at http://localhost:${port}`);
});

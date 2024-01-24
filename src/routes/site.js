// Import the Express module
const express = require('express');

// Create a new router instance for handling routes
const router = express.Router();

// Import the SiteController module
const siteController = require('../app/controllers/SiteController');

// Define a GET route for '/search' 
// and use the 'search' method of siteController to handle the request
router.get('/search', siteController.search);

// Define a GET route for the root URL '/'
// and use the 'index' method of siteController to handle the request
router.get('/', siteController.index);

// Define a GET route for '/login' 
// and use the 'login' method of siteController to handle the request
router.get('/login', siteController.login);

// Define a GET route for '/register'
router.get('/register', siteController.register);

// Define a POST route for '/register'
router.post('/register', siteController.registerUser);
// Define a POST route for '/login'
router.post('/login', siteController.loginPost);
// Define a GET route for '/logout'
router.get('/logout', siteController.logout);


module.exports = router;

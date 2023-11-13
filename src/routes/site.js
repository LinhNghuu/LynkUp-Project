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

// Export the router so it can be used in other parts of the application
module.exports = router;

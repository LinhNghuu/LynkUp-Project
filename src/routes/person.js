// Import the Express module
const express = require('express');

// Create a new router instance for handling routes
const router = express.Router();

// Import the PersonController module
const personController = require('../app/controllers/PersonController');

// Define a GET route that captures a 'slug' parameter
// and uses the 'show' method of personController to handle the request
router.get('/:slug', personController.show);

// Export the router so it can be used in other parts of the application
module.exports = router;

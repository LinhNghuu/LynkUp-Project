// Importing the Express framework
const express = require('express');

// Creating a new router object to handle routing
const router = express.Router();

// Importing the ManageController module
const manageController = require('../app/controllers/ManageController');

// Route to display the creation form
router.get('/create', manageController.create);

// Route to handle the submission of the creation form
router.post('/store', manageController.store);

// Route to display the stored items
router.get('/store', manageController.manage);

// Route to display items that have been moved to trash
router.get('/trash', manageController.trash);

// Route to display the edit form for an item
router.get('/edit/:id', manageController.edit);

// Route to handle the update of an item
router.put('/:id', manageController.update);

// Route to restore an item from trash
router.patch('/restore/:id', manageController.restore);

// Route to move an item to trash
router.delete('/:id', manageController.destroy);

// Route to permanently delete an item
router.delete('/force/:id', manageController.forceDestroy);

// Default route to display/manage items
router.get('/', manageController.manage);

// Exporting the router to be used in other parts of the application
module.exports = router;

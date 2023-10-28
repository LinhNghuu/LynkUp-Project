const express = require('express');
const router = express.Router();

const manageController = require('../app/controllers/ManageController');
router.get('/create', manageController.create);
router.get('/', manageController.show);
router.post('/store', manageController.store);


module.exports = router;

const express = require('express');
const router = express.Router();

const personController = require('../app/controllers/PersonController');
// newsController.index

router.get('/:slug', personController.show);
module.exports = router;

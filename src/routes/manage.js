const express = require('express');
const router = express.Router();

const manageController = require('../app/controllers/ManageController');
router.get('/create', manageController.create);
router.post('/store', manageController.store);
router.get('/store', manageController.manage);
router.get('/trash', manageController.trash);

router.get('/edit/:id', manageController.edit);
router.put('/:id', manageController.update);
router.patch('/restore/:id', manageController.restore);

router.delete('/:id', manageController.destroy);
router.delete('/force/:id', manageController.forceDestroy);

router.get('/', manageController.manage);
module.exports = router;
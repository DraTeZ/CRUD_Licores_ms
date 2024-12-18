const express = require('express');
const router = express.Router();
const liquorController = require('../controllers/liquorController');

router.post('/', liquorController.createLiquor);
router.get('/', liquorController.getAllLiquors);
router.get('/:id', liquorController.getLiquorById);
router.put('/:id', liquorController.updateLiquor);
router.delete('/:id', liquorController.deleteLiquor);

module.exports = router;

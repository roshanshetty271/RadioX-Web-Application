const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor-controller');

router.post('/', doctorController.addDoctor);
router.delete('/:id', doctorController.deleteDoctor);
router.put('/:id', doctorController.updateDoctor);

module.exports = router;

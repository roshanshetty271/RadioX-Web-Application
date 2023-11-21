const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient-controller');

router.delete('/delete/:id', patientController.deletePatient);

module.exports = router;

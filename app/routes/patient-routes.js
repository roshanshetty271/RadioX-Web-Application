import express from 'express';
const router = express.Router();
import * as patientController from '../controllers/patient-controller.js';

router.delete('/delete/:id', patientController.deletePatient);

export default router;
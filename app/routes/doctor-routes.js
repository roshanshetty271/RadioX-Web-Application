import express from 'express';
import * as doctorController from '../controllers/doctor-controller.js';

const router = express.Router();

// Create a new doctor
router.route('/doctors').post(doctorController.registerDoctor);

// Get doctor by ID
router.route('/doctors/:id').get(doctorController.viewDoctorInfo);

// Update doctor by ID
router.route('/doctors/:id').put(doctorController.updateDoctor);

// Delete doctor by ID
router.route('/doctors/:id').delete(doctorController.deleteDoctor);

export default router;

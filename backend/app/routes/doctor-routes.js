// ./app/routes/doctor-routes.js
import express from 'express';
import * as doctorController from '../controllers/doctor-controller.js';

const router = express.Router();

// Create a new doctor
router.route('/doctors').post(doctorController.registerDoctor);

// Handle multiple HTTP methods on the same endpoint
router.route('/doctors/:id')
  .get(doctorController.viewDoctorInfo)
  .put(doctorController.updateDoctor)
  .delete(doctorController.deleteDoctor);

export default router;

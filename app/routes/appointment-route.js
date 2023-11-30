import express from 'express';
import * as appointmentController from '../controllers/appointment-controller.js';

const router = express.Router();

<<<<<<< HEAD
router.route('/schedule').post(appointmentController.post);

router.route('/:id')
  .get(appointmentController.get)
  .put(appointmentController.put)
  .delete(appointmentController.remove);

export default router;
=======
const router = express.Router()

router.route('/schedule').post(appointmentController.scheduleAppointment)

router.route('/:id').get(appointmentController.getAppointment)
     
router.route('/update/:id').put(appointmentController.updateAppointment)
     
router.route('/cancel/:id').patch(appointmentController.cancelAppointment)
export default router
>>>>>>> e67115be88a786f172adcccb12f318fc6356503c

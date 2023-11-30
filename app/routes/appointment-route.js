import express from 'express'

import * as appointmentController from '../controllers/appointment-controller.js'

const router = express.Router()

router.route('/schedule').post(appointmentController.post)

router.route('/:id')
<<<<<<< HEAD
 .get(appointmentController.get)
 .put(appointmentController.put)
 .delete(appointmentController.remove)
=======
     .get(appointmentController.get)
     .put(appointmentController.put)
     .delete(appointmentController.remove)
>>>>>>> 0fb6927865a35e6ec76e2b7712cb42aae9f6f0cb

export default router
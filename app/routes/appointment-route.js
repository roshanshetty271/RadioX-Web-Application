import express from 'express'

import * as appointmentController from '../controllers/appointment-controller.js'

const router = express.Router()

router.route('/schedule')
    .get(appointmentController.find)
    .post(appointmentController.post)

// router.route('/:id')
//     .get(appointmentController.get)
//     .put(appointmentController.put)
//     .delete(appointmentController.remove)

export default router
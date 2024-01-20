import express from 'express'
import * as slotController from '../controllers/slot-controller.js'

const router = express.Router()


router.route('/slots').get(slotController.getSlots)

export default router
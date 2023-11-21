import express from 'express';
const router = express.Router();
import { generateBill } from '../controllers/bill-controller.js';

router.post('/', generateBill); 

export default router;
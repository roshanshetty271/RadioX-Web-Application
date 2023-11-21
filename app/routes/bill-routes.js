const express = require('express');
const router = express.Router();
const billController = require('../controllers/bill-controller');

router.post('/', billController.generateBill);

module.exports = router;

const express = require('express');
const router = express.Router();
const adminMiddleware = require ('../middlewares/adminmiddleware');

const {createOrder,orderStatus} = require('../controllers/ordercontroller');
const { authMiddleware } = require('../middlewares/authMiddlewares');

router.post('/createorder',authMiddleware,createOrder);

router.post('/status/:id',authMiddleware ,adminMiddleware,orderStatus);

module.exports = router;
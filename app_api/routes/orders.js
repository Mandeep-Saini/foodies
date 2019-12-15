const express = require('express');
const router = express.Router();
const ctrlOrder = require('../controllers/orders');

router
.route('/orders')
.get(ctrlOrder.getOrders)
.post(ctrlOrder.createOrders);

router
.route('/orders/:orderid')
.get(ctrlOrder.getSingleOrder)
.put(ctrlOrder.updateOrder)
.delete(ctrlOrder.deleteOrder);

module.exports = router;

var express = require('express');
var router = express.Router();

const ctrlOrder = require('../controller/orders');
const ctrlAbout = require('../controller/about');
/* GET home page. */
router.get('/', ctrlOrder.ordersList); 
router.get('/orders/:orderid', ctrlOrder.orderDetail); 

router.route('/new')
.get(ctrlOrder.addNewOrder)
.post(ctrlOrder.doAddNewOrder);

router.get('/about', ctrlAbout.about);
router.get('/list', ctrlOrder.showOrders);

module.exports = router;



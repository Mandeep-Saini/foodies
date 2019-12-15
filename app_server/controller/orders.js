const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const _renderCreatePage = function (req, res){
    res.render('create-new-order',{
              title:"Create new order"
               });
};

const addNewOrder = function(req, res){
    _renderCreatePage(req,res);
};

const doAddNewOrder = function(req, res){
    
    const path = '/api/orders';
    const postdata = {
        name: req.body.name,
        category: req.body.category,
        year: req.body.year,
        moviecollection: req.body.moviecollection,
		ratings:req.body.ratings
    };
	console.log(postdata);
    const requestOptions ={
        url: apiOptions.server+path,
        method: 'POST',
        json: postdata
    };
 request(
 requestOptions,
 (err, response, body) => {
     if (response.statusCode === 201){
         res.redirect('/');
     }
 });
    
};


const _renderHomePage = function(req, res, responseBody){
    res.render('list-display', { orders: responseBody});
};

const _renderOrderListPage = function(req, res, responseBody){
    res.render('order-list', { orders: responseBody});
};

const _renderDetailPage = function(req, res, responseBody){
    res.render('display', { currentOrder: responseBody});
};


const ordersList= function(req,res){
    const path = '/api/orders';
    const requestOptions = {
        url: apiOptions.server +path,
        method:'GET',
        json:{}
    };
request(requestOptions,(err, response, body) => {
   _renderHomePage(req, res, body); 
    
});
};

const showOrders= function(req,res){
    const path = '/api/orders';
    const requestOptions = {
        url: apiOptions.server +path,
        method:'GET',
        json:{}
    };
request(requestOptions,(err, response, body) => {
   _renderOrderListPage(req, res, body); 
    
});
};

const orderDetail= function(req,res){
    const path = `/api/orders/${req.params.orderid}`;
    const requestOptions = {
        url: apiOptions.server +path,
        method:'GET',
        json:{}
    };

   request(requestOptions,(err, response, body) => {
   _renderDetailPage(req, res, body); 
    
});
};

module.exports = {
    ordersList,
    orderDetail,
    doAddNewOrder,
    addNewOrder,
    showOrders
};
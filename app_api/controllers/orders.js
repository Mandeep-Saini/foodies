const mongoose = require('mongoose');
const orders = mongoose.model('orders');

const getOrders = function(req, res){
    orders.find()
     .exec(function(err,orderdata){
        if(err)
            {
                res
                .status(404)
                .json(err);
                return;
            }
         res
        .status(200)
        .json(orderdata);
    });

};

const createOrders = function(req, res){
	
    orders
    .create({
        name: req.body.name,
        category: req.body.category,
        year: req.body.year,
        moviecollection: req.body.moviecollection,
		ratings:req.body.ratings
    }, 
            (err, orderdata) => {
        if(err)
            {
                res
                .status(400)
                .json(err);
            }
        else
            {
                res
                .status(201)
                .json(orderdata);
            }
    });
};
 



const getSingleOrder = function(req, res){
    
    if(req.params && req.params.orderid){
        orders
        .findById(req.params.orderid)
        .exec(function(err, orderdata) {
            if(!orderdata)
                {
                    res
                    .status(404)
                    .json({"message": "orderid Not Found"});
                    return;
                }
            else if(err)
                {
                 res
                    .status(404)
                    .json(err);
                    return;   
                }
            res
            .status(200)
            .json(orderdata);
        });
    }
   
};


const updateOrder = function(req, res){
    
     if(!req.params.orderid){
         res
         .status(404)
         .json({"message": "No orderid is passed!"});
         return;
         
     };
     orders
    .findById(req.params.orderid)
    .exec((err, orderdata) => {
        if(!orderdata)
            {
                res
                .status(404)
                .json({"message": "This orderid is not found"});
                return;
            }
        else if(err)
            {
                res
                .status(404)
                .json(err);
                return;
            }
        orderdata.name = req.body.name;
        orderdata.category = req.body.category;
        orderdata.year = req.body.year;
        orderdata.moviecollection = req.body.moviecollection;
        
        orderdata.save((err, orderid) => {
            if(err)
                {
                    res
                    .status(404)
                    .json(err);
                    return;
                }
            else
                {
                    res
                    .status(200)
                    .json(orderid);
                }
        });
    });
};

const deleteOrder = function(req, res){
   const orderid = req.params.orderid;
    if(orderid)
        {
            orders
            .findByIdAndRemove(orderid)
            .exec((err, orderid) => {
                if(err)
                    {
                        res
                        .status(404)
                        .json(err);
                        return;
                    }
                res
                .status(204)
                .json({"message": "The data was successfully deleted!"});
            });
        }
    else 	
        {
            res
            .status(404)
            .json({"message": "No orderid"});
        }
};

module.exports={
   getOrders, createOrders, getSingleOrder, updateOrder, 
    deleteOrder
};
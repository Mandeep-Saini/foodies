const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3
    },
    category:{
        type: String,
        required: true
    } ,
    year:{
        type: String,
        required: true
    },
    moviecollection:{
        type: String,
        required: true
    },
     ratings:{
        type: String, 
        required: true
    }
});
/* const movieReviewSchema = new mongoose.Schema({
    name:{
        authorName: String,
        required: true,
        minlength:6
    },
    reviewMessage:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
}); */
mongoose.model('orders',orderSchema); 


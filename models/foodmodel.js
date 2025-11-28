const mongoose = require ('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"] },
    description: {
        type: String,
        required: [true, "Description is required"] },
    price: {
        type: Number,
        required: [true, "Price is required"] },
        image: {
        type: String,},
           
     foodtags: {
        type: [String] ,  
    },
    category: {
        type: String,},
     code :{
        type: String,
     },   
     isavailable: {
        type: Boolean,
        default: true,},
     restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'},
        rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5
    },
    ratingcount: {
        type: String
    },

},
{timestamps: true}
);

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
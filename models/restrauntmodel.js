const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestrauntSchema = new Schema({    
    name: {
        type: String,
        required: true,
        },
    imageurl: {
        type: String,
        
    },
    food :{
        type : Array,
    },
    time:{
        type: String,
    },
    pickup:{
        type: Boolean,
        default: true,
    },
   delivery:{
        type: Boolean,
        default: true,
    },
    isopen:{
        type: Boolean,
        default: true,
    },
    logourl:{
        type: String,
    },
    rating:{
        type: Number,
        default: 1,
        min: 1,
        max: 5,
    },
    ratingcount:{
        type: String,
    },
    code :{
        type: String,   
     },
     coords :{
        id : {type : String},
        latitude : {type : Number},
        latitudedelta : {type : Number},
        longitude : {type : Number},
        longitudedelta : {type : Number},
        address : {type : String},
        title : {type : String},
     },

},



{    timestamps: true}
);

const RestrauntModel = mongoose.model('Restraunt', RestrauntSchema);
module.exports = RestrauntModel;
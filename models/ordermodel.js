const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({   
foods : [
    {
type: mongoose.Schema.Types.ObjectId,
ref: 'Food'
    }
],
payment:{

},

buyer : {
type: mongoose.Schema.Types.ObjectId,
ref: 'User'},
status : {
type: String,
enum: ['pending', 'on the way','prepare', 'cancelled', 'delivered'],
default: 'pending'
},



},{timestamps:true});
module.exports = mongoose.model('Order', orderSchema);


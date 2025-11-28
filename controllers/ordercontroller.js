const Order = require('../models/ordermodel');

const createOrder = async (req, res) => {
    try {
        const { cart } = req.body;
        if(!cart){
            return res.status(404).json({message : "Please Add Payments or Food Cart "})
        }
        let total = 0;
        cart.map((i)=>{
       total += i.price
        });
       const foodIds = cart.map(item => item.id); // assuming item.id is ObjectId string

const newOrder = new Order({
    foods: foodIds,
    payment: total,
    buyer: req.userId
});

    
        await newOrder.save();
        res.status(201).json({message : "Order Place Successfully ",newOrder});
    } catch (error) {
        res.status(500).json({ message:"ERROR IN PLACE Order API", error});
    }
};


const orderStatus = async (req,res) =>{
    try{
        const orderId = req.params.id;
        if (!orderId){
            return res.status(404).json({message: "Please Provide Order ID"});
        }
        const {status} = req.body;
        const order = await Order.findByIdAndUpdate(orderId,{status},{new :true})
        res.status(200).json({message: "Order Status Updated"})

    }
    catch(error){
    return res.status(500).json({message:"Order Status API Failed",error})};
}

module.exports = {
    createOrder,
    orderStatus
};

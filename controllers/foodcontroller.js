const Food = require('../models/foodmodel');

// Controller to add a new food item
const addFoodController = async (req, res) => {
    try {
        const { name, description, price, image, foodtags, category, code, isavailable, restaurantId } = req.body;
        if (!name || !description || !price || !restaurantId) {
            return res.status(400).json({ message: 'Name, description, price, and restaurantId are required' });
        }
        const newFood = new Food({
            name,
            description,
            price,
            image,
            foodtags,
            category,
            code,
            isavailable,
            restaurantId
        });
        await newFood.save();
        res.status(201).json({ message: 'Food item added successfully', food: newFood });
    } catch (error) {
        console.error('Error adding food item:', error);
        res.status(500).json({ message: 'Internal server error' });
    } 

};


//Get All Foods Controller
const getallfoodsController = async(req,res) =>{
try{
    const foods = await Food.find({});
    if(foods.length === 0){
        return res.status(404).json({message:"No food items found"});
    }
    res.status(200).json({message:"Foods fetched successfully", foods});
}catch(error){
    console.error('Error fetching food items:', error);
    res.status(500).json({ message: 'Internal server error' });
}
};

const getallfoodsControllerbyId = async(req,res) =>{
    try{
        const restaurantId = req.params.id;
        if(!restaurantId){
            return res.status(400).json({message:"Restaurant ID is required"});
        }
        const food = await Food.find({ restaurant : restaurantId});
        if(!food){
            return res.status(404).json({message:"Food item not found on Restaurant "});
        }
        res.status(200).json({message:`Food fetched successfully from Restaurant ${restaurantId}`, food});
    }catch(error){
        console.error('Error fetching food item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const updateFoodController = async (req, res) => {
    try{
        const foodId = req.params.id;
        if(!foodId){
            return res.status(400).json({message:"Food ID is required"});
        }
        const food = await Food.findById(foodId);
        if(!food){
            return res.status(404).json({message:"Food item not found"});
        }
        const {
            name,
            description,
            price,
            image,
            foodtags,
            category,
            code,
            isavailable,
            restaurantId
        } = req.body;
       
        const updatedFood = await Food.findByIdAndUpdate(foodId, req.body, { new: true });
        res.status(200).json({message:"Food item updated successfully", updatedFood});
    }
    catch(error){
        console.error('Error updating food item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const deleteFoodController = async (req, res) => {
    try{
        const foodId = req.params.id;
        if(!foodId){
            return res.status(400).json({message:"Food ID is required"});
        }
        const food = await Food.findById(foodId);
        if(!food){
            return res.status(404).json({message:"Food item not found"});
        }
        await Food.findByIdAndDelete(foodId);
        res.status(200).json({message:"Food item deleted successfully"});
    }catch(error){
        console.error('Error deleting food item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    addFoodController,
    getallfoodsController,
    getallfoodsControllerbyId,
    updateFoodController,
    deleteFoodController
};
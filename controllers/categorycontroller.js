const CatergroryModel = require('../models/catergrorymodel');

// Create a new category

const createCategory = async (req, res) => {    
    try {
        const { name, imageurl } = req.body;
       if(!name ){
        return res.status(400).json({ message: 'Name and Image URL are required' });
       }
        const newCategory = new CatergroryModel({ name, imageurl });
        await newCategory.save();
        res.status(201).json({ message: 'Category created successfully', category: newCategory });

    } catch (error) {
        res.status(500).json({ message: 'Server Error in Category Creation', error: error.message });
    }   
};

//Get All Categories
const getallCategories = async (req, res) => {
try{
    const categories = await CatergroryModel.find({});
    if(categories.length === 0) {
        return res.status(404).json({ message: 'No categories found' });
    }
    res.status(200).json({  message:"Categories Fetched Successfully", totalCategories : categories.length, categories });
} catch (error) {
    res.status(500).json({ message: 'Server Error in Fetching Categories', error: error.message });
}
};


const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        if (!categoryId) {
            return res.status(400).json({ message: 'Category ID is required' });
        }
        const { name, imageurl } = req.body;
        const updatedCategory = await CatergroryModel.findByIdAndUpdate(  
            categoryId,
            { name, imageurl },
            { new: true }  
        );  
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category updated successfully', category: updatedCategory });
    } catch (error) {
        res.status(500).json({ message: 'Server Error in Updating Category', error: error.message });
    }
};


//Delete Category By ID

const deleteCategory = async (req, res) => {
try{
    const categoryId = req.params.id;
    if (!categoryId) {
        return res.status(400).json({ message: 'Category ID is required' });
    }
    const deletedCategory = await CatergroryModel.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully', category: deletedCategory });
} catch (error) {
    res.status(500).json({ message: 'Server Error in Deleting Category', error: error.message });
}
};


module.exports = { createCategory, getallCategories ,updateCategory ,deleteCategory};
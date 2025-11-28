const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddlewares');
const {createCategory,getallCategories,updateCategory,deleteCategory} = require("../controllers/categorycontroller");


// Create a new category    

router.post("/createcategory",authMiddleware,createCategory);

// Get all categories
router.get("/getallcategories",authMiddleware, getallCategories);

//Update Category 
router.put("/updatecategory/:id",authMiddleware, updateCategory);

//Dlete Category By ID
router.delete("/deletecategory/:id",authMiddleware, deleteCategory);


module.exports = router;


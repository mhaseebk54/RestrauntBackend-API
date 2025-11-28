const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddlewares');
const {addFoodController ,getallfoodsController,getallfoodsControllerbyId,updateFoodController,deleteFoodController} = require("../controllers/foodcontroller");


router.post("/create", authMiddleware, addFoodController);
router.get("/getallfoods", authMiddleware, getallfoodsController);
router.get("/getallfoodsbyid/:id", authMiddleware, getallfoodsControllerbyId);
router.put("/update/:id", authMiddleware,updateFoodController);
router.delete("/delete/:id", authMiddleware, deleteFoodController);

module.exports = router;
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddlewares');
const {createRestraunt,getRestraunt,getRestrauntById,deleteRestraunt} = require("../controllers/restrauntcontroller")

//Create Restraunt
router.post("/create",authMiddleware,createRestraunt)

//Get All Restraunts
router.get("/getallrestraunt",authMiddleware,getRestraunt)

//Get Restraunt By ID
router.get("/getrestrauntbyid/:id",authMiddleware,getRestrauntById)

//Delete Restraunt 
router.delete("/deleterestraunt/:id",authMiddleware,deleteRestraunt)


module.exports = router;


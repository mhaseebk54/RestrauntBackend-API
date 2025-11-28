const express = require('express');
const router = express.Router();
const { getUserController,updateUserController,resetPasswordController,updatePasswordController ,deleteUserController} = require('../controllers/usercontroller');
const { authMiddleware } = require('../middlewares/authMiddlewares');


//Get User Route
router.get("/getuser",authMiddleware,getUserController );

//Update User Route
router.put("/updateuser",authMiddleware, updateUserController);

//Reset Password Route
router.post("/resetpassword",authMiddleware, resetPasswordController);

//Update Password Route
router.post("/updatepassword",authMiddleware, updatePasswordController);

//Delete User Route
router.delete("/deleteuser/:id",authMiddleware,deleteUserController);

module.exports = router;
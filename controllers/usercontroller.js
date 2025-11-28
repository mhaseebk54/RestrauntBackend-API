const UserModel = require("../models/usermodel");

const getUserController =async (req,res) =>{
    try {
        const user = await UserModel.findById({_id: req.userId},{_id:0});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
       user.password = undefined;
       res.status(200).json({message: "User fetched successfully", user});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in Get Api 1 ", error });
    }       
      
};

const updateUserController = async (req, res) =>{
    try {
        const user = await UserModel.findById({ _id: req.body.id });
        if(!user){
            return res.status(404).json({ message: "User not found"});
        }
        const {username,profile } = req.body;
        if (username) user.username = username;
        if (profile) user.profile = profile;

        await user.save();
        res.status(200).json({message: "User Updated Successfully"});
         
}catch(error){
    console.log(error);
    res.status(500).json({ message: "Error in Update User Api", error });
}   
};

const bcrypt = require("bcryptjs");

const resetPasswordController = async (req, res) => {
    try {  
        const {email,newpassword} = req.body;
        if(!email || !newpassword){
            return res.status(400).json({message: "Please provide email and new password"});
        }
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const hashedPassword = await bcrypt.hash(newpassword,10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({message: "Password reset successfully"}); 
   
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in Reset Password Api", error });
    }
};

const updatePasswordController = async(req,res)=> {
    try {
        const user = await UserModel.findById({_id: req.userId});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const {oldpassword,newpassword} = req.body;
        if(!oldpassword || !newpassword){
            return res.status(400).json({message: "Please provide old and new password"});
        }
        const isMatch = await bcrypt.compare(oldpassword,user.password);
        if(!isMatch){
            return res.status(400).json({message: "Old password is incorrect"});
        }
        const hashedPassword = await bcrypt.hash(newpassword,10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({message: "Password updated successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in Update Password Api", error });
    }
}

const deleteUserController = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error in Delete User Api", error });
    }
};

module.exports = { getUserController, updateUserController, resetPasswordController, updatePasswordController ,deleteUserController  };
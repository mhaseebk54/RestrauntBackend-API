const UserModel = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
    try {
        
        const { username, email, password, usertype } = req.body;
        if (!username || !email || !password || !usertype) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const exisitinguser = await UserModel.findOne({ email });
        if (exisitinguser) {
            return res.status(400).json({ message: "User Already Exits!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({
            username,
            email,
            password: hashedPassword,
            usertype
        })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        return res.status(201).json({ message: "User Registered Successfully", token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }

};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please Provide Email and Password" });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });  
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        user.password = undefined; // Hide password in response

        return res.status(200).json({ message: "Login successful", token });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};



module.exports = { registerController, loginController };
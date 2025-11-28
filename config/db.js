const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectdb;
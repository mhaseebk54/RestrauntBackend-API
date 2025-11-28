const UserModel = require('../models/usermodel');

const adminMiddleware = async (req, res, next) => {
    try {
        // Usually req.userId comes from auth middleware
        const userId = req.userId || req.body.id;
        const user = await UserModel.findById(userId);

        if (!user || user.usertype !== "admin") {
            return res.status(401).json({ message: "Only Admin Access" });
        }

        next();

    } catch (error) {
        return res.status(500).json({ message: "Unauthorized Access", error });
    }
}

module.exports = adminMiddleware;


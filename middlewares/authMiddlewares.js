const jwt = require('jsonwebtoken');

 const authMiddleware = (req, res, next) =>{
      try { 
        const token = req.headers["authorization"].split(" ")[1];
         jwt.verify(token, process.env.JWT_SECRET,(err, decoded) => {
             if (err){ 
                return res.status(401).json({ message: "Unauthorized Access" }); }
          else { req.userId = decoded.id; 
            next(); 
        }; 
        });
     }
     catch (error) { console.log(error); 
        
     return res.status(500).json({ message: "Error in Auth Api" }); } };
     
     
     module.exports = { authMiddleware };
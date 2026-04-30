const jwt = require("jsonwebtoken")


async function AuthMiddleware(req, res, next){
    const token = req.headers.token
    if(!token){
        res.status(404).json({
            message:"token not found"
        })
        return;
    }
    let decoded
    try {
        decoded = jwt.verify(token , process.env.JWT_SECRET)
    } catch (error) {
        res.status(401).json({
            message: "invalid token"
        })
        return
    }
    if(decoded.userId){
        req.userId = decoded.userId
        next()
    }else{
        console.log("there is some err ");
    }
} 

module.exports = {
    AuthMiddleware
}
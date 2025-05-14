
const jwt = require('jsonwebtoken')

exports.authMiddleware = async (req, res, next) => {
    // get cookie from request
    const token = req.cookies.token
    if (!token) { // if no token, return unauthorized
        return res.status(401).json({ msg: "Unauthorized" })
    }
    const decoded = jwt.verify(token, "123456") // verify token
    req.user = decoded; // set user to decoded
    next(); // call next middleware
}



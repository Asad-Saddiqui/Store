
const jwt = require('jsonwebtoken')

exports.authMiddleware = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) { // if no token, return unauthorized
        return res.status(401).json({ msg: "Unauthorized" })
    }
    const decoded = jwt.verify(token, "123456") // verify token
    console.log({ decoded })
    req.user = decoded; // set user to decoded
    next(); // call next middleware
}



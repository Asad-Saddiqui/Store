
const jwt = require('jsonwebtoken')

exports.authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ msg: "Unauthorized" })
    }
    const decoded = jwt.verify(token, "123456")
    decoded.role = "Admin"
    req.user = decoded;
    next();
}



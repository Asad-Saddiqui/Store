
const jwt = require('jsonwebtoken')

exports.isAdmin = async (req, res, next) => {

    let user = req.user;
    if (user.role === "Admin") {
        next();

    } else {
        return res.json({ msg: "Invalid ROle" })
    }
}



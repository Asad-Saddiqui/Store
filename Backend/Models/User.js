const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fisrtName: {
        type: String,
        require: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    },
    password: {
        type: String,
        require: true,
    }
})
const User = mongoose.model("User", userSchema)


module.exports = User;

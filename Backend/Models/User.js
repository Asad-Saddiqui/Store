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
    password: {
        type: String,
        require: true,
    }
})
const User = mongoose.model("User", userSchema)


module.exports = User;

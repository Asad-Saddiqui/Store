const mongoose = require('mongoose')


const dbConnection = () => {
    mongoose.connect('mongodb://localhost:27017/Store').then(() => {
        console.log("Db Connected")
    }).catch((err) => {
        console.log(err)
    })
}


module.exports = dbConnection
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    product_name: {
        type: String,
        require: true
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    price: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    }
})
const Product = mongoose.model("Product", productSchema)

module.exports = Product;

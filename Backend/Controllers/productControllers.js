
const Product = require('../Models/Product') // import product model
exports.addProduct = async (req, res) => { // add product

    const file = req.file // get file
    const user = req.user // get user
    console.log({ user }) // log user
    console.log({ file }) // log file

    const newProduct = new Product({ // create new product
        product_name: req.body.product_name, // add product name
        price: req.body.price, // add price
        description: req.body.description, // add description
        user_id: user._id, // add user id
        image: file.filename // add image path
    })

    const savedProduct = await newProduct.save() // save product
    res.status(201).json(savedProduct) // return saved product

}
exports.getProducts = async (req, res) => { // get products
    const products = await Product.find().populate("user_id") // get all products
    res.status(200).json(products) // return products
}

exports.getProductById = async (req, res) => { // get product by id
    const product = await Product.findById(req.params.id) // get product by id
    res.status(200).json(product) // return product
}

exports.updateProduct = async (req, res) => { // update product
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }) // update product
    res.status(200).json(product) // return product
}

exports.deleteProduct = async (req, res) => { // delete product
    await Product.findByIdAndDelete(req.params.id) // delete product
    res.status(200).json({ message: 'Product deleted' }) // return message
}





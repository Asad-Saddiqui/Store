
const express = require('express') // import express
const productControllers = require('../Controllers/productControllers') // for product controllers
const router = express.Router(); // create router
const uploads = require('../middleware/uploadMiddleware') // for uploading images
const middleware = require('../middleware/AuthMiddleware') // for authentication

router.post('/', middleware.authMiddleware, uploads.single('image'), productControllers.addProduct) // add product
router.get('/', middleware.authMiddleware, productControllers.getProducts) // get products
router.get('/:id', middleware.authMiddleware, productControllers.getProductById) // get product by id
router.put('/:id', middleware.authMiddleware, productControllers.updateProduct) // update product
router.delete('/:id', middleware.authMiddleware, productControllers.deleteProduct) // delete product


module.exports = router;




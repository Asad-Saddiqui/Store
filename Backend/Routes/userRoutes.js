const express = require('express')
const userControllers = require('../Controllers/userControllers')
const router = express.Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const isAdmin = require('../middleware/isAdmin')


router.post('/signup', userControllers.signup)
router.post('/login', userControllers.loginFunc)
router.get('/user', authMiddleware.authMiddleware, isAdmin.isAdmin, userControllers.getUser)




module.exports = router
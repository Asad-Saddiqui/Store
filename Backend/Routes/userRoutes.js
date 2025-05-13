const express = require('express')
const userControllers = require('../Controllers/userControllers')
const router = express.Router()


router.post('/signup', userControllers.signup)
router.post('/login', userControllers.loginFunc)


module.exports = router
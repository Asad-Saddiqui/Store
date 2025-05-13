const User = require('../Models/User')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.loginFunc = async (req, res) => {
    const data = req.body;
    console.log({ data })
    const findUser = await User.findOne({ email: data.email })
    console.log({ findUser })

    if (findUser) {
        if (data.password === findUser.password) {
            const token = jwt.sign({ _id: findUser._id, email: findUser.email }, "123456", { expiresIn: "1h" })
            console.log({ token })
            return res.json({ login: true, token: token, msg: "Login Successfully" })
        } else {
            return res.status(400).json({ msg: "Invalid Login Cradentials" })

        }
    } else {
        return res.status(400).json({ msg: "Invalid Login Cradentials" })
    }
}


exports.signup = async (req, res) => {
    const data = req.body;
    const findUser = await User.findOne({ email: data.email })
    console.log(findUser)
    if (findUser) {
        return res.status(400).json({ msg: "Account Already Exist" })
    }


    const hashPassword = await bycrypt.hash(data.password, 10)

    console.log({ hashPassword })

    data.password = hashPassword
    const user_ = await User.create(data)
    const saved = await user_.save()
    return res.json({ msg: "Account Created" })
}


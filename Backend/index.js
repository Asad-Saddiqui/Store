const express = require('express');
const mongoose = require('mongoose')

const cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json())



mongoose.connect('mongodb://localhost:27017/Store').then(() => {
    console.log("Db Connected")
}).catch((err) => {
    console.log(err)
})


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


app.post("/signup", async (req, res) => {
    const data = req.body;
    const findUser = await User.findOne({ email: data.email })
    console.log(findUser)
    if (findUser) {
        return res.status(400).json({ msg: "Account Already Exist" })
    }
    const user_ = await User.create(data)
    const saved = await user_.save()
    return res.json({ msg: "Account Created" })
})
app.post("/login", async (req, res) => {
    const data = req.body;
    console.log({ data })
    const findUser = await User.findOne({ email: data.email })
    console.log({ findUser })
    if (findUser) {
        if (data.password === findUser.password) {
            return res.json({ login: true, message: "Login Successfully" })
        } else {
            return res.status(400).json({ msg: "Invalid Login Cradentials" })

        }
    } else {
        return res.status(400).json({ msg: "Invalid Login Cradentials" })

    }


})


app.get("/", () => {
    console.log("hi")
})





app.listen(4000, () => {
    console.log("Runing Server on port 4000")
})









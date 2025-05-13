const express = require('express');
const dbConnection = require('./config/db')
const User = require('./Models/User')
const cors = require('cors')
const userRoutes = require('./Routes/userRoutes')

const app = express();


app.use(cors())
app.use(express.json())
dbConnection()

// app.post("/api/user/signup", async (req, res) => {
//     const data = req.body;
//     const findUser = await User.findOne({ email: data.email })
//     console.log(findUser)
//     if (findUser) {
//         return res.status(400).json({ msg: "Account Already Exist" })
//     }
//     const user_ = await User.create(data)
//     const saved = await user_.save()
//     return res.json({ msg: "Account Created" })
// })
// app.post("/api/user/login", async (req, res) => {
//     const data = req.body;
//     console.log({ data })
//     const findUser = await User.findOne({ email: data.email })
//     console.log({ findUser })
//     if (findUser) {
//         if (data.password === findUser.password) {
//             return res.json({ login: true, message: "Login Successfully" })
//         } else {
//             return res.status(400).json({ msg: "Invalid Login Cradentials" })

//         }
//     } else {
//         return res.status(400).json({ msg: "Invalid Login Cradentials" })

//     }


// })


app.use('/api/user', userRoutes)


app.get("/", () => {
    console.log("hi")
})





app.listen(4000, () => {
    console.log("Runing Server on port 4000")
})









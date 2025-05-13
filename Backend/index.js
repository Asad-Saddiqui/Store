const express = require('express');
const dbConnection = require('./config/db')
const User = require('./Models/User')
const cors = require('cors')
const userRoutes = require('./Routes/userRoutes')
const OOP = require('./OOP')
const app = express();


app.use(cors())
app.use(express.json())
dbConnection()



app.use('/api/user', userRoutes)


app.get("/", () => {
    console.log("hi")
})





app.listen(4000, () => {
    console.log("Runing Server on port 4000")
})









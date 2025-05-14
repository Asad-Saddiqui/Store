const express = require('express');
const dbConnection = require('./config/db')
const User = require('./Models/User')
const cors = require('cors')
const multer = require('multer')
const cookieParser = require('cookie-parser')
const OOP = require('./OOP')
const app = express();

// Routes   
const userRoutes = require('./Routes/userRoutes')
const productRoutes = require('./Routes/productRoutes')




app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}))
app.use(express.json())
dbConnection()

app.use(cookieParser({
    origin: ['http://localhost:5173'],
}));



app.use('/api/user', userRoutes)
app.use('/api/products', productRoutes)


// use static files
app.use(express.static('uploads'))


app.get("/", () => {
    console.log("hi")
})





app.listen(4000, () => {
    console.log("Runing Server on port 4000")
})









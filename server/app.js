const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
require("dotenv").config()
const userRouter = require('./controllers/userManagement')
const bookRouter = require('./controllers/bookManagement')
const favouriteRouter = require('./controllers/favourite')

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB')
})

app.use("/api",userRouter)
app.use('/api',bookRouter)
app.use('/api',favouriteRouter)

app.listen(process.env.PORT,() => {
    console.log(`Server started at port ${process.env.PORT}`)
})
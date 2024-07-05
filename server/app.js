import express from 'express'
const app = express()
app.use(express.json())

import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

import userRouter from './controllers/userManagement.js'
import bookRouter from './controllers/bookManagement.js'
import favRouter from './controllers/favourite.js'

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB')
})

app.use("/api",userRouter)
app.use('/api',bookRouter)
app.use('/api',favRouter)

app.listen(process.env.PORT,() => {
    console.log(`Server started at port ${process.env.PORT}`)
})
import express from 'express';
const userRouter = express.Router();

import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import  jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

import authenticateToken from '../utils/userAuth.js'

userRouter.post('/sign-up',async(req,res) =>{
    try {
    const {username , email , password , address} = req.body
    if(username.length < 4){
        return res
        .status(400)
        .json({message:"⚠️ Username should be greater than 3"})
    }
    const existingUsername = await User.findOne({username:username})
    if(existingUsername){
        return res
        .status(400)
        .json({message:"⚠️ Username already exists"})
     }
     const existingEmail = await User.findOne({email:email})
     if(existingEmail){
        return res
        .status(400)
        .json({message:"⚠️ Email already exists"})
     }
     if(password.length<=5){
        return res
        .status(400)
        .json({message:"⚠️ Password length should be more than 4"})
     }

     const hashedPassword = await bcrypt.hash(password,10)

     const newUser = new User({username:username,email:email,password:hashedPassword,address:address})
     await newUser.save();
     return res.status(200).json({message:"SignUp successful"})     
    } catch (error
    ) {
       return res.status(500).json({message:"Internal server error"}) 
    }
})

userRouter.post('/sign-in',async(req,res) => {
   try {
      const {username,password} = req.body
      const existingUser = await User.findOne({username})
      if(!existingUser){
        return res.status(400).json({message:"Invalid credentials"})
      }
      await bcrypt.compare(password,existingUser.password,(err,data) =>{
         if(data){
            const authClaims = [
               {name:existingUser.username},
               {role:existingUser.role}
            ]

            const token = jwt.sign({authClaims},process.env.KEY,{expiresIn:"7d"})
            res.status(200).json({id:existingUser.id,role:existingUser.role,token:token})
         }
         else{
            res.status(400).json({message:"Invalid  Credentials"})
         }
      })
   } catch (error
   ) {
      return res.status(500).json({message:"Internal server error"})
   }
})

userRouter.get('/userInfo',authenticateToken,async (req,res) => {
   try {
      const {id} = req.headers
      const data = await User.findById(id).select("-password")
      res.status(200).json(data)
      
   } catch (error) {
      return res.status(500).json({message:"Internal server error"})
   }
})

userRouter.put('/updateAddress',authenticateToken , async(req,res) => {
try {
   const {id} = req.headers
   const {address} = req.body
   await User.findByIdAndUpdate(id,{address: address})
   res.status(200).json({message:"address updated"})
} catch (error) {
   return res.status(500).json({message:"Internal server error"})
}
})

export default userRouter
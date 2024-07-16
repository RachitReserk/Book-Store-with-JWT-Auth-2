import express from 'express'
const cartRouter = express.Router()
import authenticateToken from '../utils/userAuth.js'
import User from '../models/user.js'

cartRouter.put("/add-to-cart",authenticateToken,async (req,res) => {
    try {
         const {bookid,id} = req.headers;
         const userData = await User.findById(id);
         const isBookFavourite = userData.cart.includes(bookid)
         if(isBookFavourite){
            return res.json(
                {
                    status:"Success",
                    message:"Book is already in cart"
                }
            )
         }
         await User.findByIdAndUpdate(id,{
            $push:{ cart:bookid}
         })

         return res.json({
            status:"Success",
            "message":"Book added to cart"
         })
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
})

cartRouter.put("remove-from-cart/:bookid",authenticateToken,async (req,res) => {
try {
    const {bookid} = req.params
    const {id} = req.headers
    await User.findByIdAndUpdate(id,{
        $pull:{cart:bookid}
    })

    return res.json({
        status:"Success",
        message:"Removed from cart"
     })
} catch (error) {
    console.log(error)
    res.status(500).json({message:"Internal Server Error"})
}    
})

cartRouter.get("/get-cart",authenticateToken,async(req,res) => {
    try {
        const {id} = req.headers
        const userData = await User.findById(id)
        const cart = userData.cart.reverse()
        console.log(cart)
        return res.json({
            status:"success",
            data:cart
        })
        } catch (error) {
        res.status(500).json({message:"Internal Server error"})
    }
})
export default cartRouter
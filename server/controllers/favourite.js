import express from 'express';
const favRouter = express.Router();

import User from '../models/user.js'
import authenticateToken from '../utils/userAuth.js'

favRouter.put('/put-fav',authenticateToken,async(req,res) => {
try {
    const {noteid , id} = req.headers
    const userData = await User.findById(id);
    const isNoteFavourite = userData.favourites.includes(noteid)
    if(isNoteFavourite)
        {
            return res.status(200).json({message:"Note already favourite"})
        }
    await User.findByIdAndUpdate(id,{$push:{favourites:noteid}})
    return res.status(200).json({message:"Note added to favourites"})
} catch (error) {
    return res.status(500).json({message:"Internal Server error"})
}
})

favRouter.put("/remove-from-fav/:bookid",authenticateToken,async (req,res) => {
    try {
        const {bookid} = req.params
        const {id} = req.headers
        await User.findByIdAndUpdate(id,{
            $pull:{favourites:bookid}
        })
    
        return res.json({
            status:"Success",
            message:"Removed from favourites"
         })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
    }    
    })

favRouter.get('/get-fav',authenticateToken,async (req,res) => {
    try {
        const {id} = req.headers
        const userData = await User.findById(id).populate("favourites");
        const favouriteBooks = userData.favourites
        return res.json({
            status:"success",
            data:favouriteBooks
        })
        } catch (error) {
        return res.status(500).json({message:"Internal Server error"})
    }
})

export default favRouter
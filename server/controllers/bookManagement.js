import express from 'express';
const bookRouter = express.Router();

import User from '../models/user.js'
import authenticateToken from '../utils/userAuth.js'
import Book from '../models/books.js'

bookRouter.post('/add-book',authenticateToken, async(req,res) => {
try {
    const {id} = req.headers
    const user = await User.findById(id)
    if(user.role !== 'admin'){
    return res.status(400).json({message:'NO ACCESS TO PERFORM THIS ACTION'})
    }
    const book = new Book({
    url:req.body.url,
    title:req.body.title,
    author:req.body.author,
    price:req.body.price,
    desc:req.body.desc,
    language:req.body.language
    })
    await book.save();
    res.status(200).json({message:"book stored !"})
} catch (error) {
   return res.status(500).json({message:"Internal server error"}) 
}
})

bookRouter.put('/update-book',authenticateToken, async(req,res) => {
    try {
    const {id} = req.headers
    const user = await User.findById(id)
    if(user.role !== 'admin'){
    return res.status(400).json({message:'NO ACCESS TO PERFORM THIS ACTION'})
    }
        const {bookid} = req.headers
        await Book.findByIdAndUpdate(bookid , {
        url:req.body.url,
        title:req.body.title,
        author:req.body.author,
        price:req.body.price,
        desc:req.body.desc,
        language:req.body.language
        })

        res.status(200).json({message:"book updated !"})
    } catch (error) {
       return res.status(500).json({message:"Internal server error"}) 
    }
    })

bookRouter.delete("/delete-book",authenticateToken,async(req,res)=>{
    try {
        const {id} = req.headers
        const user = await User.findById(id)
        if(user.role !== 'admin'){
        return res.status(400).json({message:'NO ACCESS TO PERFORM THIS ACTION'})
        }
        const {bookId} = req.headers
        await Book.findByIdAndDelete(bookId);
        return res.status(200).json({message:"Book deleted"})

    } catch (error) {
       return res.status(500).json({message:"Internal server error"}) 
} 
})

bookRouter.get('/get-all-books',async(req,res) => {
    try {
        const books = await Book.find().sort({createdAt: -1})
        return res.json({
            status:"Success",
            data:books
        })    
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})     
    }
})

bookRouter.get('/get-recent-books',async(req,res) => {
    try {
        const books = await Book.find().sort({createdAt: -1}).limit(4)
        return res.json({
            status:"Success",
            data:books
        })    
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})     
    }
})

bookRouter.get('/get-top-books',async(req,res) => {
    try {
        const books = await Book.find().sort({sold:-1}).limit(3)
        return res.json({
            status:"Success",
            data:books
        })    
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})     
    }
})

bookRouter.get('/get-book/:id',async(req,res) =>
    {
    try {
        const {id} = req.params;
        const book = await Book.findById(id)
        return res.json({
            status:"success",
            data: book
        })    
    } catch (error) {
        return res.status(500).json({message:"Internal server error"})      
    }
    })

export default bookRouter
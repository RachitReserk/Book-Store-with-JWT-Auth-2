const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true,
        default:"https://cdn-icons-png.flaticon.com/512/1326/1326405.png"
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"],
    },
    favourites:[{
        type:mongoose.Types.ObjectId,
        red:"books"
    }],
    cart:[{
        type:mongoose.Types.ObjectId,
        red:"books"
    }],
    orders:[{
        type:mongoose.Types.ObjectId,
        red:"order"
    }],
},{timestamps:true});

module.exports = mongoose.model("user",userSchema)
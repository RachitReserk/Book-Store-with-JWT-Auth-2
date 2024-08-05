import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    avatar:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/1326/1326390.png"
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
        required:true
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"],
    },
    favourites:[{
        type:mongoose.Types.ObjectId,
        ref:"books"
    }],
    cart:[{
        type:mongoose.Types.ObjectId,
        ref:"books"
    }],
    orders:[{
        type:mongoose.Types.ObjectId,
        ref:"order"
    }],
},{timestamps:true});

const User = mongoose.model("user",userSchema)
export default User
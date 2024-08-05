import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
  url:{
    type:Array,
    required:true,
  },
  title:{
    type:String,
    required:true
  },
  semester:{
  type:String,
  required:true
  },
  subject:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true
  },
  desc:{
    type:String,
    required:true
  },
  language:{
    type:String,
    required:true
  },
  sold:{
    type:Number,
    default:0
  },
  likes:{
    type:Number,
    default:0
  }
},{timestamps:true})

const Notes = mongoose.model("notes",notesSchema)
export default Notes
import { string } from "joi";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type:String,
    required:tru
  }
},{timestamps:true});
 export const user = mongoose.model('user', userSchema);
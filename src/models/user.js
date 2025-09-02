import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        minLength:8
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    About:{
        type:String,
        default:"welcome to API"
    }
})

const Login =mongoose.model("login",loginSchema)
export default Login 
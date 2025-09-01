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
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }
})

const Login =mongoose.model("login",loginSchema)
export default Login 
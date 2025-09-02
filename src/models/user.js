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
        type:String,
        validate(value){
            if(!['male','female','others'].includes(value)){
                throw new Error("gender data is not valid")
            }
        }
    },
    About:{
        type:String,
        default:"welcome to API"
    },
    skills:{
        type:[String],
    }
},{
    timestamps:true
})

const Login =mongoose.model("login",loginSchema)
export default Login 
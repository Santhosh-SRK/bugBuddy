import express from 'express'
import { connectDB } from "./config/database.js";
import User from './models/user.js'; 
const app = express()

 app.post('/signup', async (req,res)=>{
  const user=new User({
    firstName:"Santhosh",
    lastName:"Ramachandra",
    emailId:'santhu@gmail.com',
    password:"san123"
  })
  
//   const newUser = new User(userOBJ);   
  await user.save();
 res.send("successfully created......")
})


connectDB().then(() => {
    console.log('db connected successfully');
const port = 3000;
    app.listen(port, () => {
        console.log('successfully');
    })
}).catch(err => {
    console.log('db not connected');
})




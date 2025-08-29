import express from 'express'
import { connectDB } from "./config/database.js";
import User from './models/user.js'; 
const app = express()

 app.post('/signup', async (req,res)=>{
  const userOBJ={
    firstName:"Santhu",
    lastName:"R",
    emailId:'san@gmail.com',
    password:"san123"
  }
  
  const newUser = new User(userOBJ);   
  await newUser.save();
 res.send("successfully")
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




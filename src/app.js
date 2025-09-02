import express from 'express'
import { connectDB } from "./config/database.js";
import Login  from './models/user.js';
const app = express()

app.use(express.json())

app.post('/signup', async (req, res) => {
    console.log(req.body);
    const login = new Login (
        // {
        //     firstName: "Santhosh11",
        //     lastName: "Ramachandra111",
        //     emailId: 'santhu@gmail.com',
        //     password: "san123"
        // }
        req.body 
    )

    //   const newUser = new User(userOBJ);   
    try{
        await login.save();
    res.send("successfully created......")
    }catch(err){
    res.status(400).send("error" +err.message)
    }
})

//get user by email

app.get('/user', async (req,res)=>{
   const email=req.body.emailId
   try{
    const user=await Login.findOne({emailId:email})
    if(user.length===0){
        res.status(404).send("user not found")
    }else{
        res.send(user)
    }
    // res.send(user)
   }
   catch(err){
    res.status(400).send("something went wrong"+err.message)
   }
})

//feed api-GET
app.get  ('/feed', async (req,res)=>{
 try{
  const user= await Login.find({});
  res.send(user)
 }
 catch(err){
    res.status(400).send("something went wrong"+err.message)
   }

})

//to delete

app.delete('/user', async (req,res)=>{
    const userId=req.body.userId
    try{
        // const user=await Login.findByIdAndDelete(userId)
                const user=await Login.findByIdAndDelete({_id:userId})

    res.send('successfully...../../.')
    }
    catch(err){
    res.status(400).send("something went wrong delete not success"+err.message)
   }
})

app.patch('/user',async (req,res)=>{
        const userId=req.body.userId
        const data=req.body

try{
    const user= await Login.findByIdAndUpdate({_id:userId},data)
    res.send('sent successfully')
}catch(err){
    res.status(400).send("something went wrong while updating",+err.message)
}
})
connectDB().then(() => {
    console.log('db connected successfully');
    const port = 3000;
    app.listen(port, () => {
        console.log('successfully');
    })
}).catch((err) => {
    console.error("db not connected:", err.message);
  });




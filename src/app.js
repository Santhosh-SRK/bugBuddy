import express from 'express'
import { connectDB } from "./config/database.js";
import Login  from './models/user.js';
const app = express()

app.use(express.json()
)
app.post('/signup', async (req, res) => {
    console.log(req.body);
    const login = new Login (
        // {
        //     firstName: "Santhosh",
        //     lastName: "Ramachandra",
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


connectDB().then(() => {
    console.log('db connected successfully');
    const port = 3000;
    app.listen(port, () => {
        console.log('successfully');
    })
}).catch((err) => {
    console.error("db not connected:", err.message);
  });




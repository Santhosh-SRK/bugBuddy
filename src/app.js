import express from 'express'
import { connectDB } from "./config/database.js";
const app = express()

connectDB().then(() => {
    console.log('db connected successfully');
    app.listen(port, () => {
        console.log('successfully');
    })
}).catch(err => {
    console.log('db not connected');
})

const port = 3000;



import express from 'express'

const app=express()


app.use("/test",(req,res)=>{
    res.send("hello.....")
})

const port=3000;

app.listen(port,()=>{
    console.log('successfully');
})

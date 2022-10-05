const express = require("express")
const dotenv = require('dotenv')
// const mongoose = require('mongoose')
dotenv.config({path:"./config.env"})
const app = express()

const port = process.env.PORT
require('./db/conn')
// const User = require('./model/userSchema')

app.use(require('./router/auth'));//linking our routes

const middleware = (req,res,next)=>{
    console.log("Hello i am middleware")
    next()
}

// app.get('/',(req,res)=>{
//     res.send(`Hello testing`);
// })
// app.get('/about',middleware ,(req,res)=>{
//     console.log("Hello I am About")
//     res.send(`Hello About`);
// })
// app.get('/contact',(req,res)=>{
//     res.send(`Hello contact`);
// })
// app.get('/signup',(req,res)=>{
//     res.send(`Hello signup`);
// })

// app.get('/signin',(req,res)=>{
//     res.send(`Hello signin`);
// })




app.listen(port,()=>{
console.log(`server running on ${port}`)
})
console.log("OK")
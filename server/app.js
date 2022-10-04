const express = require("express")
const mongoose = require('mongoose')
const app = express()
const db = 'mongodb+srv://mernstack:admin@cluster0.rhal0li.mongodb.net/mernstack'

mongoose.connect(db,{
    useNewUrlParser:true,
  
}).then(()=>{

    console.log("Connection Successfull")
}).catch((err)=>{
    console.log(err)
})
const middleware = (req,res,next)=>{
    console.log("Hello i am middleware")
    next()
}

app.get('/',(req,res)=>{
    res.send(`Hello testing`);
})
app.get('/about',middleware ,(req,res)=>{
    console.log("Hello I am About")
    res.send(`Hello About`);
})
app.get('/contact',(req,res)=>{
    res.send(`Hello contact`);
})
app.get('/signup',(req,res)=>{
    res.send(`Hello signup`);
})

app.get('/signin',(req,res)=>{
    res.send(`Hello signin`);
})


const PORT = 3000;

app.listen(PORT,()=>{
console.log(`server running on ${PORT}`)
})
console.log("OK")
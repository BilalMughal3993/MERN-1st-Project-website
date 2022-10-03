const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send(`Hello testing`);
})
app.get('/about',(req,res)=>{
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
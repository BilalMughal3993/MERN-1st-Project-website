const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send(`Hello testing router`);
})

router.post('/register',(req,res)=>{

   console.log(req.body);
   res.send("Running register")
})



router.get('/about' ,(req,res)=>{
    console.log("Hello I am About")
    res.send(`Hello About`);
})
router.get('/contact',(req,res)=>{
    res.send(`Hello contact`);
})
router.get('/signup',(req,res)=>{
    res.send(`Hello signup`);
})

router.get('/signin',(req,res)=>{
    res.send(`Hello signin`);
})


module.exports =router

const mongoose = require('mongoose')

const db = process.env.DATABASE

mongoose.connect(db,{
    useNewUrlParser:true,
  
}).then(()=>{

    console.log("Connection Successfull")
}).catch((err)=>{
    console.log(err)
})
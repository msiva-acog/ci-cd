const express = require('express')
const app = express();

app.get("/",(req,res)=>{
    res.send("hello welcome")
})


app.listen(3000,()=>{
    console.log("up and running on port 3000");
})
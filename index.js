const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send("helloo welocme to ci-cd")
})



app.listen(5000,()=>{
    console.log("app is up and running on port 5000");
})
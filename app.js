var express=require("express");
var app=express();

app.get('/',(req,res)=>{
    res.send("Hello There!!");
})

app.listen(3000,process.env.IP,()=>{
    console.log("Listening on Port 3000");
})
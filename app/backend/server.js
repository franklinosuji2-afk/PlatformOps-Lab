const express=require("express")

const app=express()

app.get("/",(req,res)=>{
res.json({
project:"PlatformOps Lab",
status:"Healthy",
version:"1.0.0"
})
})

app.get("/health",(req,res)=>{
res.json({status:"UP"})
})

app.listen(3000)

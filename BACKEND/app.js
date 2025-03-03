const mongoose=require("mongoose")
const express=require("express")
require("dotenv").config()
const connectDB=require("./connection")
const userroute=require("./userroute")

PORT=process.env.PORT

app.use("/user",userroute)

const app=express()
app.use(express.json())

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running at http://localhost:${PORT}`)
    })
})
.catch((error)=>{
    console.error("mongoDB connection failed")
})
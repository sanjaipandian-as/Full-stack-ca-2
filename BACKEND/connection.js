const mongoose=require("mongoose")
require("dotenv").config()

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected suceesfully")
    } catch (error) {
        console.error("mongoDB connection failed",error)   
    }
}

module.exports=connectDB

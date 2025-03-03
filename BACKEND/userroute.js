const mongoose=require("mongoose")
const express=require("express")
const userModel=require("./schema")

const router=express.Router

router.post("/user", async(req,res)=>{
    try {
        const {user,data,duration,caloriesburned,exercies}=req.body
        if (!user || !data || !duration || !caloriesburned ){
            return res.status(500).json("all fields are required")
        }
        res.status(500).json("user created succesfully")

    } catch (error) {
        console.error( "connection failed ",error)
        res.status(500).json("error",error)
    }
})

router.get("/user",async(req,res)=>{
    const users=userModel.find({},("user data dutation"))
    .then(()=>{
        console.log(users)
    })
    .catch((error)=>{
        console.log(error)
    })
})

router.put("/user/:id",async(req,res)=>{
    const {id}=req.params
    const {user,date}=req.body

    const users=userModel.findByIdAndUpdate({id},{user,data,duration},{new:true})

})

router.delete("/user/:id",async(req,res)=>{
    try {
        const users=userModel.findByIdAndDelete(req.params.id)
        if (!users){
            res.status(500).json("user not found")
        }
        res.status(200).json("user deleted succesfully",users)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

module.exports=router
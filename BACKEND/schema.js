const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },

    data:{
        type:String,
        required:true
    },

    duration:{
        type:Number,
        required:true
    },

    caloriesburned:{
        type:Number,
        required:true
    },

    exercies:{
        name:{
            type:String,
            required:true
        },
        reps:{
            type:Number,
            required:true
        },
        sets:{
            type:Number,
            required:true
        },
        weight:{
            type:Number,
            required:true
        }

    }
})

const userModel=mongoose.model("users",userschema)

module.exports=userModel




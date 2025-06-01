const mongoose=require("mongoose")
const Appoinmentbook = require("../models/appoinmentmodel")
const userlog=async(req,res)=>{
    try{
        const user=req.user
        const result=await Appoinmentbook.find({user_name:user.username})
        console.log(result)
        return res.status(201).json(result)
    }catch(error){
        console.log("error in userlog(backend)",error.message)
        return res.status(500).json("Internal server error")
    }
}
module.exports=userlog
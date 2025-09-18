const express=require("express");
const Appoinmentbook = require("../models/appoinmentmodel");
const router=express.Router()

router.delete("/appointment/delete/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        await Appoinmentbook.deleteOne({_id:id});
        res.status(200).json("Appointment deleted sucessfully");
    }catch(error){
        res.status(500).json(error)
        console.log(error.message)
    }
})
module.exports=router;
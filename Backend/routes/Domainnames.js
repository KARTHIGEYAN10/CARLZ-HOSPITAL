const express=require("express");
const domains = require("../models/domainmodel");
const router=express.Router();

router.get("/domain",async(req,res)=>{
    try{
        const result=await domains.find();
        res.status(200).json(result);
    }catch(error){
        res.status(500).json("Internal server error")
        console.log(error)
    }
})

module.exports=router;
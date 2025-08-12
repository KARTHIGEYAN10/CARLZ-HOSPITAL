const express=require("express");
const jobapplications = require("../models/jobmodel");
const router=express.Router();
router.post("/jobapply",async(req,res)=>{
    try{
        const data={role:req.body.role,fullname:req.body.fullname,
        fathername:req.body.fathername,
        mobilenumber:req.body.mobilenumber,
        email:req.body.email,
        maritalstatus:req.body.maritalstatus,
        photo:"",
        dob:req.body.dob,
        gender:req.body.gender,
        street:req.body.street,
        city:req.body.city,
        state:req.body.state,
        postalcode:req.body.postalcode,
        secondmobilenumber:req.body.secondmobilenumber,
        resume:""
        }
        await jobapplications.create(data);
        res.status(201).json("job details sended successfully");
    }catch(error){
        console.error("Error in jobrouter",error.message);
        res.status(500).json("Internal server error",error);
    }    
})

module.exports=router
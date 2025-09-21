const express=require("express");
const generalappointments = require("../models/generalappointmentmodel");
const router=express.Router()
router.post("/general-appointment",async(req,res)=>{
    try{
        const {name,age,gender,dob,contactnumber,emailaddress,appointmenttype,currentdatetime}=req.body;
        const data={
            name,
            age,
            gender,
            dob,
            contactnumber,
            emailaddress,
            appointmenttype,
            appointeddatetime:currentdatetime
        }
        await generalappointments.create(data);
        res.status(200).json("Appointment sended successfully");
    }catch(error){
        console.log(error.message);
        res.status(500).json("Internal server error",error);
    }
})
module.exports=router;
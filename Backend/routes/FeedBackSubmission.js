const express=require("express");
const router=express.Router();
const FeedBackSubmissions=require("../models/FeedBackmodel")
router.post('/feedback',async(req,res)=>{
    const data=req.body;
    console.log(data)
    try{
        await FeedBackSubmissions.create(data);
        res.status(200).json("data are stored sucessfully");
    }catch(error){
        res.status(500).json("Internal server error"+error);
        console.log(error.message);
    }
});

module.exports=router;

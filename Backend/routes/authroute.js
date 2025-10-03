const express=require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const logeduser = require("../models/loginmodels")
const GenerateToken = require("../utils/tokengeneration")
const RegisteredUser = require("../models/registermodel")
const router=express.Router()
router.post("/register",async(req,res)=>{
    try{
        const data=req.body
        const check=await RegisteredUser.findOne({email:data.email})
        if(check){
            return res.status(400).json("This email id is already registered")
        }
        if(data.password.length < 8){
            return res.status(400).json("password length must be atleast 8 characters")
        }
        const salt=await bcrypt.genSalt(10)
        const hasedpassword=await bcrypt.hash(data.password,salt)
        const finaldata={
            username:data.username,
            email:data.email,
            password:hasedpassword
        }
        const result=await RegisteredUser.create(finaldata)
        GenerateToken(result._id,res)
        res.status(201).json(result)
    }catch(error){
        console.error("Error in register",error.message)
        res.status(500).json(error.message)
    }
})
router.post("/login",async (req,res)=>{
    const data=req.body
    try{
        const email=data.email
        const check=await RegisteredUser.findOne({email})
        if(!check){
            return res.status(400).json("Email id is not registered")
        }
        const checkpassword=await bcrypt.compare(data.password,check.password)
        if(!checkpassword){
            return res.status(400).json("Password incorrect")
        }
        const checklogin=await logeduser.findOne({email})
        if(checklogin){
            console.log("checklogin "+checklogin._id);
            GenerateToken(checklogin._id,res)
            return res.status(201).json(checklogin)
        }
        else{
            const result=await logeduser.create({username:check.username,
                email,
                password:data.password
            })
            console.log("Connected user id:",GenerateToken(result._id,res))
            if(result){
                return res.status(201).json(result)
            }
        }
    }catch(error){
        console.log("Login controller error",error.message)
        res.status(500).json(error.message)
    }
})
router.post("/logout",(req,res)=>{
    try{
        console.log("Logged out userid: ",req.cookies.jwt)
        res.cookie("jwt","",{maxAge:0})
        res.status(201).json("Logged Out Successfully")
    }catch(error){
        console.log("Error in logout Controller",error.message)
        res.status(500).json("Internal server error")
    }
})
module.exports=router
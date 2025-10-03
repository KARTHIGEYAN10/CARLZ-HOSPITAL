const logeduser = require("../models/loginmodels")
const jwt = require("jsonwebtoken");
const protectroute=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt
        console.log(token);
        if(!token){
            return res.status(400).json("No Token")
        }
        const decode=jwt.verify(token,process.env.SECRET_CODE)
        console.log(decode)
        if(!decode){
            return res.status(400).json("Invalid Token")
        }
        const user=await logeduser.findOne({_id:decode.userid})
        console.log("userid:"+user);
        if(!user){
            return res.status(400).json("User Not in Logged model")
        }
        req.user=user
        next()
    }catch(error){
        console.log("error in protect route",error.message)
        res.status(500).json("Internal Server Error")
    }
}
module.exports=protectroute

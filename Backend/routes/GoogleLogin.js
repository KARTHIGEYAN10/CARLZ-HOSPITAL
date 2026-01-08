const express=require("express")
const router=express.Router();
const axios=require("axios");
const logeduser = require("../models/loginmodels");
const GenerateToken = require("../utils/tokengeneration");

router.post('/google-login', async (req, res) => {
    const { token } = req.body;
  
    try {
      const response = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`);
      const { name, email } = response.data;
      console.log(email);
      const check=await logeduser.findOne({email:email})
      if(check){
        GenerateToken(check._id,res)
        return res.status(201).json(check)
      }else{
        const n={
          username:name,
          email:email,
          password:"oauthlogin"
        }
        const result=await logeduser.create(n)
        return res.status(201).json(result)
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'Google login failed '+ error});
    }
  });
module.exports=router;
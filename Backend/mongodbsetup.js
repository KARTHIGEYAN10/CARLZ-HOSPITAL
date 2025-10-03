const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const mongodbconnect=async()=>{
    const mongodbString=process.env.MONGODB_URL;
    console.log(mongodbString)
    try{
        await mongoose.connect(mongodbString)
        console.log("mongodb connected Sucessfully")
    }catch(err){
        console.log(err)
    }
}
module.exports=mongodbconnect
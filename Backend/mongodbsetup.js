const mongoose=require("mongoose")
const dotenv=require("dotenv")
const path=require("path")
dotenv.config({ path: path.resolve(__dirname, ".env") });
const mongodbconnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb connected Sucessfully")
    }catch(err){
        console.log(err)
    }
}
module.exports=mongodbconnect
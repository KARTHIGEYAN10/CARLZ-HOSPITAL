const mongoose=require("mongoose")
const mongodbconnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb connected Sucessfully")
    }catch(err){
        console.log(err)
    }
}
module.exports=mongodbconnect
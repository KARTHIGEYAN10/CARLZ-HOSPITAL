const mongoose=require("mongoose");
const domainschema=new mongoose.Schema({
    img:{type:String},
    label:{type:String}
},{timestamps:true})
const domains=mongoose.model("domains",domainschema);
module.exports=domains;
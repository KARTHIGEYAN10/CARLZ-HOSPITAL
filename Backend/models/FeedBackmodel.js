const mongoose=require("mongoose")

const feedbackformschema=new mongoose.Schema({
    name:{type:String},
    phonenumber:{type:String},
    email:{type:String},
    subject:{type:String},
    message:{type:String}
},{timestamps:true});

const FeedBackSubmissions=mongoose.model("FeedBackSubmissions",feedbackformschema);
module.exports=FeedBackSubmissions;

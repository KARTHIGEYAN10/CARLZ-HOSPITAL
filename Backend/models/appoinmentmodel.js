const mongoose=require("mongoose")
const appoinmentschema=new mongoose.Schema({
    user_name:{type:String},
    user_email:{type:String},
    doctor_name:{type:String},
    doctor_email:{type:String},
    doctor_rate:{type:String},
    doctor_success:{type:String},
    doctor_role:{type:String},
    mode_appoinment:{type:String},
    date_visit:{type:String},
    time_visit:{type:String},
    reason_for_appointment:{type:String},
    status:{type:String}
},{timestamps:true})
const Appoinmentbook=mongoose.model("Appoinmentbook",appoinmentschema)
module.exports=Appoinmentbook
const mongoose=require("mongoose");

const generalappointmentschema=new mongoose.Schema(
    {
        name:{type:String},
        age:{type:String},
        gender:{type:String},
        dob:{type:String},
        contactnumber:{type:String},
        emailaddress:{type:String},
        appointmenttype:{type:String},
        appointeddatetime:{type:String}
    },{
        timestamps:true
    }
)
const generalappointments=mongoose.model("general-appointments",generalappointmentschema)
module.exports=generalappointments;
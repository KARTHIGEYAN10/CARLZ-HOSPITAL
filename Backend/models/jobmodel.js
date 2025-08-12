const mongoose=require("mongoose")
const jobSchema=new mongoose.Schema({
    role:{type:String},
    fullname:{type:String},
    fathername:{type:String},
    mobilenumber:{type:String},
    email:{type:String},
    maritalStatus:{type:String},
    photo:{type:String},
    dob:{type:String},
    gender:{Type:String},
    street:{Type:String},
    city:{Type:String},
    state:{Type:String},
    postalcode:{Type:String},
    secondmobilenumber:{Type:String},
    resume:{Type:String},
},{
    timestamps:true
})
const jobapplications=mongoose.model("job-applications",jobSchema)
module.exports=jobapplications;
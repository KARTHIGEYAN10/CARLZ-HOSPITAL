const mongoose=require("mongoose")

const registerschema=new mongoose.Schema({
    username:{type:String},
    email:{type:String,
        validate:{
            validator:function(v){
                const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                return emailRegex.test(v)
            },
            message:"please enter a valid email address"
        }
    },
    password:{type:String,
        minlength:[8,"password should have atleast 8 characters"]
    },
    confirmpassword:{type:String}
},{
    timestamps:true
})
const RegisteredUser=mongoose.model("RegisteredUser",registerschema)
module.exports=RegisteredUser